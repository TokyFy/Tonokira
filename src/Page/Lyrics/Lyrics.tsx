import React, { FunctionComponent, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { GetLyrics } from "../../service";
import { useQuery } from "react-query";
import LyricsSkeleton from "./LyricsSkeleton";
import { IMAGE_PROXY_URL } from "../../constant";
import { Download, Play, Heart, MoreHorizontal, Music, Share } from "lucide-react";
import { extractColorsFromImage, applyColorPalette, ColorPalette } from "../../utils/colorExtractor";

const Lyrics: FunctionComponent = () => {
  const { id } = useParams();
  const { title, artist, image, album, ArtistId } = useLocation().state;
  const [colorPalette, setColorPalette] = useState<ColorPalette | null>(null);

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
      return el.replace(/\[\d{2,3}:\d{2,3}\.\d{2,3}]/, "").trim();
    });

  if (isLoading) {
    return <LyricsSkeleton />;
  }

  const dynamicStyles = colorPalette ? {
    background: `linear-gradient(135deg, ${colorPalette.primary} 0%, ${colorPalette.secondary} 50%, #000000 100%)`,
    color: colorPalette.text
  } : {};

  return (
    <div 
      className="min-h-screen transition-all duration-1000 ease-out"
      style={dynamicStyles}
    >

      {/* Main Content */}
      <div className="relative min-h-screen">
        {/* Header Section */}
        <div className="relative px-6 pt-16 pb-8">
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

          {/* Notice */}
          <div className="mb-8">
            <p 
              className="text-sm opacity-70 italic"
              style={{ color: colorPalette?.textSecondary }}
            >
              These lyrics aren't time-synced, yet.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mb-8">
            <button className="w-14 h-14 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-all hover:scale-105 shadow-lg">
              <Play size={20} className="text-black ml-1" fill="black" />
            </button>
            <button 
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105"
              style={{ backgroundColor: `${colorPalette?.accent}40` }}
            >
              <Heart size={20} style={{ color: colorPalette?.text }} />
            </button>
            <button 
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105"
              style={{ backgroundColor: `${colorPalette?.accent}40` }}
              onClick={() => downloadTxtFile(`${LyricsData?.lyric}`, title, artist)}
            >
              <Download size={20} style={{ color: colorPalette?.text }} />
            </button>
            <button 
              <h2 
                className="text-2xl font-bold mb-8"
                style={{ color: colorPalette?.text }}
              >
                Lyrics
              </h2>
                onClick={() => setIsFullscreen(true)}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
                style={{ 
                {lyrics?.map((lyricText, index) => {
                  if (!lyricText) return null;
                Fullscreen
              </button>
            </div>

                      className="group py-3 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02]"
            <div className="space-y-4">
              {lyrics?.map((el, index) => {
                      <p 
                        className="text-2xl md:text-3xl font-light leading-relaxed transition-all duration-300 group-hover:font-normal"
                        style={{ color: colorPalette?.text }}
                      >
                        {lyricText}
                      </p>
                    )}
                    
                    {/* Lyric Text */}
                    <div className="flex-1">
                      <p 
                        className="text-2xl md:text-3xl font-light leading-relaxed transition-all duration-300 group-hover:font-normal"
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