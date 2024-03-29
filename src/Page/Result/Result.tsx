import React, {FunctionComponent, useEffect, useState} from "react";
import MusicCards from "../../components/MusicCards";
import {MusicCardSkeleton} from "../../components/MusicCards";
import Search from "../../components/Search";

import {useSearchParams} from "react-router-dom";
import {searchSongs} from "../../service";
import Error from "../../components/Error";
import {useQuery} from "react-query";

interface OwnProps {
}

type Props = OwnProps;

const Result: FunctionComponent<Props> = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("q"));

    const {isLoading, isError, data, error, refetch} = useQuery(
        ["search", query],
        ({}) => searchSongs(`${query}`),
        {
            staleTime: 5 * (60 * 1000),
            cacheTime: 2.5 * (60 * 1000),
        }
    );

    const clickHandler = async (str: string) => {
        if (!(str.trim() === "")) {
            setSearchParams({q: str});
            setQuery(str);
        }
    };

    return (
        <>
            <div className="my-8">
                <Search onClick={clickHandler}
                        InputValue={query || ""}
                        placeHolder={"e.g.: Clairo"}
                />
            </div>

            <div className={"flex flex-col"}>
                {isLoading ? (
                    <>
                        <MusicCardSkeleton/>
                        <MusicCardSkeleton/>
                        <MusicCardSkeleton/>
                        <MusicCardSkeleton/>
                    </>
                ) : isError ? (
                    <Error/>
                ) : (
                    data!.map((song, index) => (
                        <MusicCards
                            image={`${song.AlbumArts}`}
                            title={song.title}
                            album={song.Album.name}
                            artist={song.Artists[0].name}
                            key={index}
                            songId={song.id}
                            ArtistId={song.Artists[0].id}
                        />
                    ))
                )}
            </div>
        </>
    );
};
export default Result;
