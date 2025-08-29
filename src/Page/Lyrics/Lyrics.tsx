import React, { FunctionComponent } from "react";
import { useLocation, useParams } from "react-router-dom";
import { GetLyrics } from "../../service";
import { useQuery } from "react-query";
import LyricsSkeleton from "./LyricsSkeleton";
import { IMAGE_PROXY_URL } from "../../constant";
import { Download, Play, Heart, MoreHorizontal, Music } from "lucide-react";

const Lyrics: FunctionComponent = () => {
  const { id } = useParams();
  const { title, artist, image, album, ArtistId } = useLocation().state;

  const {
    isLoading,
    isError,
    data: LyricsData,
    error,
  } = useQuery(["Lyrics", id], ({}) => GetLyrics(`${id}`), {
    staleTime: 5 * (60 * 1000),
    cacheTime: 2.5 * (60 * 1000),
  });

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

  return (
    <div>
      {isLoading ? (
        <LyricsSkeleton />
      ) : (
        <>
          {/* Song Header */}
          <div className="relative">
            <div className="bg-gradient-to-b from-gray-700 to-gray-900 px-6 pt-16 pb-6">
              <div className="flex items-end gap-6">
                <div className="w-56 h-56 bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center shadow-2xl">
                  {image ? (
                    <img
                      className="w-full h-full object-cover"
                      src={`${IMAGE_PROXY_URL}${image}`}
                      alt={title}
                    />
                  ) : (
                    <Music size={80} className="text-gray-400" />
                  )}
                </div>
                <div className="pb-6">
                  <p className="text-sm font-bold text-white mb-2">Song</p>
                  <h1 className="text-6xl font-black text-white mb-2">{title}</h1>
                  <div className="flex items-center gap-1 text-gray-300">
                    <span className="font-semibold hover:underline cursor-pointer">
                      {artist}
                    </span>
                    <span>•</span>
                    <span>{album}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="px-6 py-6 bg-gradient-to-b from-gray-900/50 to-black">
            <div className="flex items-center gap-6">
              <button className="w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center transition-all hover:scale-105"
                      onClick={() => downloadTxtFile(`${LyricsData?.lyric}`, title, artist)}
                >
                <Download size={20} className="text-black"/>
              </button>
            </div>
          </div>

          {/* Lyrics */}
          <div className="px-6 pb-6">
            <h2 className="text-xl font-bold text-white mb-6">Lyrics</h2>
            <div className="bg-gradient-to-b from-gray-900/30 to-black/30 rounded-lg p-6">
              <div className="space-y-2 max-w-4xl">
                {lyrics?.map((el, index) => {
                  return (
                    <div key={index} className="group flex items-start gap-4 py-1 hover:bg-gray-800/30 rounded px-2 transition-colors">
                      <p className="flex">
                         <span className="text-xs text-gray-500 font-mono mt-1 w-16 flex-shrink-0">
                        {el[0] ? el[0][0].replace(/[\[\]]/g, '') : ''}
                      </span>
                      </p>
                      <p className="text-white text-lg leading-relaxed flex-1">
                        {el[1]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Lyrics;