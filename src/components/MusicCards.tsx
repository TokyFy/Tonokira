import React, {FunctionComponent, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {IMAGE_PROXY_URL} from "../constant";
import {useQuery} from "react-query";
import {GetPictures} from "../service";
import {Play, User} from "lucide-react";

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

    const {isLoading, isError, data, error} = useQuery<{ url: string }>(
        ["Pictures", `${songId || ImageId}`],
        ({}) => {
            if (image) return new Promise((resolve, reject) => {
                resolve({
                    url: image
                })
            })

            return GetPictures(`${ImageId}`)
        },
        {
            staleTime: 5 * (60 * 1000),
            cacheTime: 2.5 * (60 * 1000),
        }
    );


    const cardClickHandler = () => {
        navigate(`/lyrics/${songId}`, {
            state: {
                title: title,
                artist: artist,
                image: data?.url,
                album: album,
                ArtistId: ArtistId
            },
        });
    };

    const ArtistNameClickHandler = () => {
        navigate(`/artist/${ArtistId}`);
    };

    return (
        <div className="group flex items-center gap-4 p-4 rounded-lg hover:bg-gray-700/30 cursor-pointer transition-all border border-transparent hover:border-gray-600/30">
            <div className="relative">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                    {isLoading ? (
                        <div className="w-full h-full bg-gray-600 animate-pulse rounded-lg"></div>
                    ) : data?.url ? (
                        <img 
                            src={`${IMAGE_PROXY_URL}${data.url}`} 
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <Music size={20} className="text-gray-400" />
                    )}
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <Play size={16} className="text-white" fill="white" />
                </div>
            </div>
            
            <div className="flex-1 min-w-0" onClick={() => cardClickHandler()}>
                <h3 className="text-white font-medium truncate group-hover:text-green-400 transition-colors">
                    {title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span
                        className="hover:text-white hover:underline cursor-pointer transition-colors"
                        onClick={(event) => {
                            event.stopPropagation();
                            ArtistNameClickHandler();
                        }}
                    >
                        {artist}
                    </span> • <span>{album}</span>
                </div>
            </div>
        </div>
    );
};

export const MusicCardSkeleton: FunctionComponent = () => {
    return (
        <div className="flex items-center gap-4 p-4 rounded-lg">
            <div className="w-12 h-12 bg-gray-600 rounded-lg animate-pulse">
            </div>
            <div className="flex-1">
                <div className="h-4 bg-gray-600 rounded w-3/4 mb-2 animate-pulse"></div>
                <div className="h-3 bg-gray-700 rounded w-1/2 animate-pulse"></div>
            </div>
        </div>
    );
};

export default MusicCards;