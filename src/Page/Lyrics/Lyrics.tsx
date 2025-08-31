import React, { FunctionComponent, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { GetLyrics } from "../../service";
import { useQuery } from "react-query";
import LyricsSkeleton from "./LyricsSkeleton";
import { IMAGE_PROXY_URL } from "../../constant";
import { Download, Play, Heart, MoreHorizontal, Music, X, Share } from "lucide-react";
import { extractColorsFromImage, applyColorPalette, ColorPalette } from "../../utils/colorExtractor";

const Lyrics: FunctionComponent = () => {
  const { id } = useParams();
  const { title, artist, image, album, ArtistId } = useLocation().state;
  const [colorPalette, setColorPalette] = useState<ColorPalette | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const {
    isLoading,
    isError,
    data: LyricsData,
    error,
  } = useQuery(["Lyrics", id], ({}) => GetLyrics(`${id}`), {
    staleTime: 5 * (60 * 1000),
    cacheTime: 2.5 * (60 * 1000),
  });

  // Extract colors from album artwork
  useEffect(() => {
    if (image) {
      extractColorsFromImage(`${IMAGE_PROXY_URL}${image}`)
        .then((palette) => {
          setColorPalette(palette);
          applyColorPalette(palette);
        })
        .catch(() => {
          // Use default colors if extraction fails
          const defaultPalette = {
            primary: '#1f2937',
            secondary: '#374151',
            accent: '#6366f1',
            text: '#ffffff',
            textSecondary: '#d1d5db'
          };
          setColorPalette(defaultPalette);
          applyColorPalette(defaultPalette);
        });
    }
  }, [image]);

  function downloadTxtFile(Lrc: string, title: string, Artist: string) {
    const blob = new Blob([Lrc], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title} - ${Artist}.lrc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  const lyrics = LyricsData?.lyric
    .split("\n")
    .filter((el) => !(el.includes("[00:00.00") || el.includes("[00:01.00")))
    .map((el) => {
      return [
        el.match(/\[\d{2,3}:\d{2,3}\.\d{2,3}]/),
        el.replace(/\[\d{2,3}:\d{2,3}\.\d{2,3}]/, ""),
      ];
    });

  if (isLoading) {
    return <LyricsSkeleton />;
  }

  const dynamicStyles = colorPalette ? {
    background: `linear-gradient(135deg, ${colorPalette.primary} 0%, ${colorPalette.secondary} 50%, ${colorPalette.secondary} 100%)`,
    color: colorPalette.text
  } : {};

  return (
    <div 
      className="min-h-screen transition-all duration-1000 ease-out"
      style={dynamicStyles}
    >
      {/* Fullscreen Lyrics Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex flex-col" style={dynamicStyles}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 bg-black/20 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                {image ? (
                  <img
                    src={`${IMAGE_PROXY_URL}${image}`}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <Music size={20} className="text-gray-400" />
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-bold text-lg" style={{ color: colorPalette?.text }}>{title}</h3>
                <p className="text-sm" style={{ color: colorPalette?.textSecondary }}>{artist}</p>
              </div>
            </div>
            <button
              onClick={() => setIsFullscreen(false)}
              className="w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-colors"
            >
              <X size={20} style={{ color: colorPalette?.text }} />
            </button>
          </div>

          {/* Fullscreen Lyrics */}
          <div className="flex-1 overflow-y-auto px-6 pb-6">
            <div className="max-w-4xl mx-auto space-y-6 py-8">
              {lyrics?.map((el, index) => (
                <div key={index} className="text-center">
                  <p 
                    className="text-3xl md:text-4xl font-light leading-relaxed transition-all duration-300 hover:scale-105"
                    style={{ color: colorPalette?.text }}
                  >
                    {el[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="p-6 bg-black/20 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-8">
              <button className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all">
                <Heart size={20} style={{ color: colorPalette?.text }} />
              </button>
              <button className="w-16 h-16 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-all hover:scale-105">
                <Play size={24} className="text-black ml-1" fill="black" />
              </button>
              <button className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all">
                <Share size={20} style={{ color: colorPalette?.text }} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative min-h-screen mt-12  overflow-hidden">
        {/* Header Section */}
        <div className="relative px-12 pt-12 pb-12 ">
          <div className="flex items-start gap-6 mb-8">
            {/* Album Art */}
            <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0">
              {image ? (
                <img
                  className="w-full h-full object-cover"
                  src={`${IMAGE_PROXY_URL}${image}`}
                  alt={title}
                />
              ) : (
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <Music size={60} className="text-gray-400" />
                </div>
              )}
            </div>

            {/* Song Info */}
            <div className="flex-1 pt-4">
              <h1 
                className="text-4xl md:text-5xl font-black mb-3 leading-tight"
                style={{ color: colorPalette?.text }}
              >
                {title}
              </h1>
              <p 
                className="text-xl font-semibold mb-2"
                style={{ color: colorPalette?.textSecondary }}
              >
                {artist}
              </p>
              <p 
                className="text-lg opacity-80"
                style={{ color: colorPalette?.textSecondary }}
              >
                {album}
              </p>
            </div>
          </div>


          {/* Action Buttons */}
          <div className="flex items-center gap-4 mb-8">
            <button className="w-14 h-14 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-all hover:scale-105 shadow-lg">
              <Download size={20} className="text-black ml-1"/>
            </button>
          </div>
        </div>

        {/* Lyrics Section */}
        <div className="px-6 pb-20">
          <div className="max-w-4xl">
            {/* Section Title */}
            <div className="flex items-center justify-between mb-8">
              <h2 
                className="text-2xl font-bold"
                style={{ color: colorPalette?.text }}
              >
                Lyrics
              </h2>
              <button
                onClick={() => setIsFullscreen(true)}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
                style={{ 
                  backgroundColor: `${colorPalette?.accent}20`,
                  color: colorPalette?.text,
                  border: `1px solid ${colorPalette?.accent}40`
                }}
              >
                
              </button>
            </div>

            {/* Lyrics Content */}
            <div className="space-y-4">
              {lyrics?.map((el, index) => {
                const hasTimestamp = el[0];
                const lyricText = el[1];
                
                if (!lyricText) return null;

                return (
                  <div 
                    key={index} 
                    className="group flex items-start gap-6 py-2 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                    style={{ backgroundColor: `${colorPalette?.accent}10` }}
                  >
                    {/* Timestamp */}
                    {hasTimestamp && (
                      <div className="flex-shrink-0 w-16 pt-1">
                        <span 
                          className="text-xs font-mono opacity-60"
                          style={{ color: colorPalette?.textSecondary }}
                        >
                          {hasTimestamp[0].replace(/[\[\]]/g, '')}
                        </span>
                      </div>
                    )}
                    
                    {/* Lyric Text */}
                    <div className="flex-1">
                      <p 
                        className="text-2xl md:text-3xl font-bold leading-relaxed transition-all duration-300 group-hover:font-normal"
                        style={{ color: colorPalette?.text }}
                      >
                        {lyricText}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;