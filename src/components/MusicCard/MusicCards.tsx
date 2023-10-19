import React, {FunctionComponent, useEffect} from "react";
import style from "./MusicCards.module.scss";
import {useNavigate} from "react-router-dom";
import {IMAGE_PROXY_URL} from "../../constant";
import {useQuery} from "react-query";
import {GetPictures} from "../../service";

interface OwnProps {
    image: string;
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

    const {isLoading, isError, data, error, refetch} = useQuery(
        ["Pictures", `${ImageId}${title}`],
        ({}) => (!Boolean(image) ? GetPictures(`${ImageId}`) : {url: image}),
        {
            staleTime: 5 * (60 * 1000),
            cacheTime: 2.5 * (60 * 1000),
        }
    );

    useEffect(() => {
        console.log(ImageId)
    }, [data]);

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
        <div className={"group flex flex-row-reverse py-2 justify-between items-center cursor-pointer"}
             onClick={() => cardClickHandler()}>
            <div className={"w-16 aspect-square rounded overflow-hidden bg-neutral-300"}>
                {isLoading ? null : (
                    <img src={`${IMAGE_PROXY_URL}${data?.url}`} alt=""/>
                )}
            </div>
            <p className={"flex flex-col"}>
                <span
                    className={"first-letter:uppercase font-bold text-neutral-600 group-hover:text-purple-400 duration-500"}>{`${title} - ${album}`}</span>
                <span
                    className={"text-neutral-400 "}
                    onClick={(event) => {
                        event.stopPropagation();
                        ArtistNameClickHandler();
                    }}
                >
                  By <strong className="group-hover:underline">{artist}</strong>
                </span>
            </p>
        </div>
    );
};

export const MusicCardSkeleton: FunctionComponent = () => {
    return (
        <div className={"group flex flex-row-reverse py-2 justify-between items-center cursor-pointer"}>
            <div className={"w-16 rounded overflow-hidden bg-neutral-200 aspect-square"}></div>
            <p className={"flex flex-col gap-[2px]"}>
                <span
                    className={"first-letter:uppercase font-bold text-neutral-600 group-hover:text-purple-400 duration-500 bg-neutral-200 h-3 w-28"}></span>
                <span className="bg-neutral-200 h-3 w-24"></span>
            </p>
        </div>
    );
};

export default MusicCards;
