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
                album : album,
                ArtistId : ArtistId
            },
        });
    };

    const ArtistNameClickHandler = () => {
        navigate(`/artist/${ArtistId}`);
    };

    return (
        <div className={"group flex p-1 items-center cursor-pointer gap-4  my-1 border-2 rounded hover:bg-neutral-50 dark:hover:bg-gray-900 dark:border-gray-500"}
             onClick={() => cardClickHandler()}>
            <div
                className={"w-6 aspect-square overflow-hidden bg-neutral-300 duration-300 rounded-sm"}>
                {isLoading ? null : (
                    <img src={`${IMAGE_PROXY_URL}${data?.url}`} alt=""/>
                )}
            </div>
            <p className={"flex text-sm grow justify-between"}>
                <span
                    className={"first-letter:uppercase font-bold text-neutral-600 group-hover:text-neutral-800 dark:group-hover:text-gray-200 duration-500 dark:text-gray-300"}>{`${title} - ${album}`}</span>
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
        <div className={"group flex p-1 items-center cursor-pointer gap-4  my-1 border rounded hover:bg-neutral-50"}>
            <div
                className={"w-6 aspect-square overflow-hidden bg-neutral-300 duration-300 rounded-sm grayscale group-hover:grayscale-0"}>

            </div>
            <p className={"flex text-sm grow justify-between items-center"}>
                <span
                    className={"first-letter:uppercase font-bold bg-neutral-200 w-32 h-3 group-hover:text-purple-400 duration-500 dark:text-gray-300"}></span>
                <span
                    className={"text-neutral-400 text-[12px] dark:text-gray-500 bg-neutral-200 w-32 h-3"}
                >
                  <strong className="group-hover:underline first-letter:uppercase"></strong>
                </span>
            </p>
        </div>
    );
};

export default MusicCards;