import React, {FunctionComponent, useEffect, useState} from "react";
import MusicCards from "../../components/MusicCards";
import {MusicCardSkeleton} from "../../components/MusicCards";
import Search from "../../components/Search";
import {Music} from "lucide-react";

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
        <div className="p-8">
            <div className="mb-8">
                <Search onClick={clickHandler}
                        InputValue={query || ""}
                        placeHolder="Search for songs, artists, or albums..."
                />
            </div>

            {query && (
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">
                        Search results for "{query}"
                    </h2>
                    <p className="text-gray-400">
                        {!isLoading && data && `${data.length} songs found`}
                    </p>
                </div>
            )}

            <div className="space-y-2">
                {isLoading ? (
                    <div className="space-y-2">
                        <MusicCardSkeleton/>
                        <MusicCardSkeleton/>
                        <MusicCardSkeleton/>
                        <MusicCardSkeleton/>
                        <MusicCardSkeleton/>
                        <MusicCardSkeleton/>
                    </div>
                ) : isError ? (
                    <Error/>
                ) : data && data.length === 0 ? (
                    <div className="text-center py-12">
                        <Music size={48} className="text-gray-600 mx-auto mb-4" />
                        <h3 className="text-white font-semibold mb-2">No results found</h3>
                        <p className="text-gray-400">Try searching with different keywords</p>
                    </div>
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
        </div>
    );
};
export default Result;
