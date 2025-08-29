import React, { FunctionComponent, useState } from "react";
import MusicCards from "../../components/MusicCards";
import { MusicCardSkeleton } from "../../components/MusicCards";
import Search from "../../components/Search";
import { Music, Clock, Hash } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { searchSongs } from "../../service";
import Error from "../../components/Error";
import { useQuery } from "react-query";

interface OwnProps {}

type Props = OwnProps;

const Result: FunctionComponent<Props> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q"));

  const { isLoading, isError, data, error, refetch } = useQuery(
    ["search", query],
    ({}) => searchSongs(`${query}`),
    {
      staleTime: 5 * (60 * 1000),
      cacheTime: 2.5 * (60 * 1000),
    }
  );

  const clickHandler = async (str: string) => {
    if (!(str.trim() === "")) {
      setSearchParams({ q: str });
      setQuery(str);
    }
  };

  return (
    <div className="px-6 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <Search
          onClick={clickHandler}
          InputValue={query || ""}
          placeHolder="What do you want to listen to?"
        />
      </div>

      {query && (
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">
            Search results for "{query}"
          </h1>
          {!isLoading && data && (
            <p className="text-gray-400">
              {data.length} song{data.length !== 1 ? 's' : ''} found
            </p>
          )}
        </div>
      )}

      {/* Results */}
      <div className="bg-black/20 rounded-lg">
        {/* Table Header */}
        {!isLoading && data && data.length > 0 && (
          <div className="grid grid-cols-12 gap-4 px-4 py-2 border-b border-gray-800 text-gray-400 text-sm">
            <div className="col-span-1 text-center">
              <Hash size={16} />
            </div>
            <div className="col-span-6 md:col-span-5">Title</div>
            <div className="hidden md:block col-span-3">Album</div>
            <div className="col-span-5 md:col-span-3 text-right">
              <Clock size={16} className="ml-auto" />
            </div>
          </div>
        )}

        {/* Results List */}
        <div className="p-2">
          {isLoading ? (
            <div className="space-y-1">
              {Array.from({ length: 8 }).map((_, index) => (
                <MusicCardSkeleton key={index} />
              ))}
            </div>
          ) : isError ? (
            <div className="p-8">
              <Error />
            </div>
          ) : data && data.length === 0 ? (
            <div className="text-center py-16">
              <Music size={64} className="text-gray-600 mx-auto mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">No results found</h3>
              <p className="text-gray-400">
                Try searching for something else
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              {data!.map((song, index) => (
                <MusicCards
                  image={`${song.AlbumArts}`}
                  title={song.title}
                  album={song.Album.name}
                  artist={song.Artists[0].name}
                  key={index}
                  index={index}
                  songId={song.id}
                  ArtistId={song.Artists[0].id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;