import React, {FunctionComponent} from "react";
import {useLocation, useParams} from "react-router-dom";
import {GetLyrics} from "../../service";
import {useQuery} from "react-query";
import LyricsSkeleton from "./LyricsSkeleton";
import Btn from "../../components/Btn";
import {IMAGE_PROXY_URL} from "../../constant";
import {Download} from "lucide-react"

const Lyrics: FunctionComponent = () => {
    const {id} = useParams();

    const {title, artist, image} = useLocation().state;

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
        .filter((el) => !(el.includes("[00:00.000]") || el.includes("[00:01.000]")))
        .map((el) => {
            return el
                .replace(/\[\d{2,3}:\d{2,3}\.\d{2,3}]/, "")
                .replace(/[^a-zA-Z ]/g, "");
        });

    return (
        <div className={""}>
            <div
                className={"flex flex-row-reverse justify-between items-end border-b border-dashed py-6 border-y-neutral-300 dark:border-b-gray-600"}>
                <div className={"w-24 aspect-square bg-neutral-100"}>
                    <img
                        src={`${IMAGE_PROXY_URL}${image}`}
                        alt={"album cover"}
                    />
                </div>
                <div>
                    <p className={"font-bold text-neutral-700 text-xl first-letter:uppercase dark:text-gray-200"}>{title}</p>
                    <p className={"text-neutral-500 first-letter:uppercase dark:text-gray-500"}>{artist}</p>
                </div>
            </div>
            {isLoading ? (
                <LyricsSkeleton/>
            ) : (
                <>
                    <div className={"py-6 text-neutral-600 text-sm font-bold dark:text-neutral-300"}>
                        {lyrics?.map((el, index) => (
                            <p className={"py-1 hover:text-purple-500"} key={index}>
                                {el}
                            </p>
                        ))}
                    </div>
                    <div className={"flex py-4"}>
                        <Btn onClick={() => downloadTxtFile(`${LyricsData?.lyric}`, title, artist)}>
                            <p className={"flex gap-2 items-center text-sm"}><Download size={14}/> <span>Download Lyrics</span></p>
                        </Btn>
                    </div>
                </>
            )}
        </div>
    );
};

export default Lyrics;
