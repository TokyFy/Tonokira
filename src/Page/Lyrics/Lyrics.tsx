import React, { FunctionComponent } from "react";
import style from "./Lyrics.module.scss";
import { useLocation, useParams } from "react-router-dom";
import { GetLyrics } from "../../service";
import { useQuery } from "react-query";
import LyricsSkeleton from "./LyricsSkeleton";
import Btn from "../../components/Btn/Btn";
import { IMAGE_PROXY_URL } from "../../constant";

interface OwnProps {}

type Props = OwnProps;

const Lyrics: FunctionComponent<Props> = (props) => {
  const { id } = useParams();

  const { title, artist, image } = useLocation().state;

  const {
    isLoading,
    isError,
    data: LyricsData,
    error,
    refetch,
  } = useQuery(["search", id], ({}) => GetLyrics(`${id}`), {
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
    .filter((el) => !(el.includes("[00:00.000]") || el.includes("[00:01.000]")))
    .map((el) => {
      return el
        .replace(/\[\d{2,3}:\d{2,3}\.\d{2,3}]/, "")
        .replace(/[^a-zA-Z ]/g, "");
    });

  return (
    <div className={""}>
      <div className={"flex flex-row-reverse justify-between items-center border-b border-dashed py-6 border-y-neutral-300"}>
        <div className={"w-16"}>
          <img
            src={`${IMAGE_PROXY_URL}${image}`}
            alt={"album cover"}
          />
        </div>
        <div>
          <p className={"font-bold text-neutral-700"}>{title}</p>
          <p className={"text-neutral-500"}>By {artist}</p>
        </div>
      </div>
      {isLoading ? (
        <LyricsSkeleton />
      ) : (
        <>
          <div className={"py-8 text-gray-600 text-[16px] font-bold"}>
            {lyrics?.map((el, index) => (
              <p className={"py-2 hover:text-purple-500 text-center"} key={index}>
                {el}
              </p>
            ))}
          </div>
          <div className={"flex justify-center py-4"}>
            <Btn
                value={"Download Lyrics"}
                onClick={() =>
                    downloadTxtFile(`${LyricsData?.lyric}`, title, artist)
                }
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Lyrics;
