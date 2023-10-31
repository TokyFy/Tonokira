import React, {FunctionComponent} from "react";
import {useLocation, useParams} from "react-router-dom";
import {GetLyrics} from "../../service";
import {useQuery} from "react-query";
import LyricsSkeleton from "./LyricsSkeleton";
import Btn from "../../components/Btn";
import {IMAGE_PROXY_URL} from "../../constant";
import {Download, Printer, DownloadCloud, ArrowDownFromLine, ArrowDown} from "lucide-react"
import MusicCards from "../../components/MusicCards";

const Lyrics: FunctionComponent = () => {
    const {id} = useParams();

    const {title, artist, image, album, ArtistId} = useLocation().state;

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
        const blob = new Blob([Lrc], {type: "text/plain"});
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
            return [el.match(/\[\d{2,3}:\d{2,3}\.\d{2,3}]/) , el.replace(/\[\d{2,3}:\d{2,3}\.\d{2,3}]/, "")]
        });

    return (
        <div className={""}>
            <div className="py-4">
                <MusicCards image={image} title={title} album={album} artist={artist} songId={String(id)}
                            ArtistId={ArtistId}/>
            </div>
            {isLoading ? (
                <LyricsSkeleton/>
            ) : (
                <>
                    <div className={"relative text-neutral-900 text-sm dark:text-neutral-300 "}>
                        {lyrics?.map((el, index) => {
                            return <p className={"group/lyrics py-1 hover:text-purple-500 w-max"} key={index}>
                                <span className="text-xs font-bold text-neutral-300 group-hover/lyrics:text-neutral-800 pr-3 font-mono dark:text-gray-700">{el[0]}</span>
                                <span className="italic w-min">{el[1]}</span>
                                {index !== 0 && index % 4 === 0 && <span key={`p=${index}`} className={"h-4 block"}></span>}
                            </p>
                        })}

                        <div
                            className={"absolute flex w-5 aspect-square border-2 border-neutral-200 hover:bg-neutral-900 hover:border-neutral-900 hover:text-neutral-200 text-neutral-400 right-0 top-1 justify-center items-center rounded-full duration-200 cursor-pointer"}
                            onClick={() => downloadTxtFile(`${LyricsData?.lyric}`, title, artist)}
                        >
                            <ArrowDown absoluteStrokeWidth size={12}/>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Lyrics;
