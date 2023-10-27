import React, {FunctionComponent, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {IMAGE_PROXY_URL} from "../constant";
import {useQuery} from "react-query";
import {GetPictures} from "../service";

interface OwnProps {
    image?: string;
    title: string;
    album: string;
    artist: string;
    songId: string;
    ImageId?: string;
    ArtistId: string;
}

type Props = OwnProps;

const MusicCards: FunctionComponent<Props> = (
    {image, title, artist, album, songId, ImageId, ArtistId}) => {
    const navigate = useNavigate();

    const {isLoading, isError, data, error, refetch} = useQuery<{url : string}>(
        ["Pictures", `${ImageId}${title}`],
        ({}) => {
            if(image) return new Promise((resolve, reject)=>{
                resolve({
                    url : image
                })
            })

            return GetPictures(`${ImageId}`)
        },
        {
            staleTime: 5 * (60 * 1000),
            cacheTime: 2.5 * (60 * 1000),
        }
    );

    useEffect(() => {
        console.log(image, data?.url)
    }, [isLoading]);

    const cardClickHandler = () => {
        navigate(`/lyrics/${songId}`, {
            state: {
                title: title,
                artist: artist,
                image: data?.url,
            },
        });
    };

    const ArtistNameClickHandler = () => {
        navigate(`/artist/${ArtistId}`);
    };

    return (
        <div className={"group flex flex-row-reverse py-3 justify-between items-center cursor-pointer"}
             onClick={() => cardClickHandler()}>
            <div
                className={"w-10 aspect-square overflow-hidden bg-neutral-300 duration-300"}>
                {isLoading ? null : (
                    <img src={`${IMAGE_PROXY_URL}${data?.url}`} alt=""/>
                )}
            </div>
            <p className={"flex flex-col text-sm"}>
                <span
                    className={"first-letter:uppercase font-bold text-neutral-600 group-hover:text-purple-400 duration-500 dark:text-gray-300"}>{`${title} - ${album}`}</span>
                <span
                    className={"text-neutral-400 text-[12px] dark:text-gray-500"}
                    onClick={(event) => {
                        event.stopPropagation();
                        ArtistNameClickHandler();
                    }}
                >
                  <strong className="group-hover:underline first-letter:uppercase">{artist}</strong>
                </span>
            </p>
        </div>
    );
};

export const MusicCardSkeleton: FunctionComponent = () => {
    return (
        <div className={"group flex flex-row-reverse py-2 justify-between items-center cursor-pointer"}>
            <div className={"w-10 rounded overflow-hidden bg-neutral-200 aspect-square dark:bg-gray-700"}></div>
            <p className={"flex flex-col gap-[2px]"}>
                <span
                    className={"first-letter:uppercase first-letter:bg-neutral-900 font-bold text-neutral-600 group-hover:text-purple-400 duration-500 bg-neutral-200 h-3 w-28 dark:bg-gray-700"}></span>
                <span className="bg-neutral-200 h-3 w-24 dark:bg-gray-700"></span>
            </p>
        </div>
    );
};

export default MusicCards;