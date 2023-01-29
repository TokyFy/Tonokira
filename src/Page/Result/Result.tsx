import React, { FunctionComponent, useState } from "react";
import style from "./Result.module.scss";
import MusicCards from "../../components/MusicCard/MusicCards";
import { MusicCardSkeleton } from "../../components/MusicCard/MusicCards";
import Search from "../../components/Search/Search";

import { useSearchParams } from "react-router-dom";
import { searchSongs } from "../../service";
import Error from "../../components/Error/Error";
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
    <>
      <Search
        onClick={clickHandler}
        InputValue={query || ""}
        placeHolder={"e.g.: Clairo"}
      />
      <div className={style.result}>
        {isLoading ? (
          <>
            <MusicCardSkeleton />
            <MusicCardSkeleton />
            <MusicCardSkeleton />
            <MusicCardSkeleton />
          </>
        ) : isError ? (
          <Error />
        ) : (
          data!.map((song, index) => (
            <MusicCards
              image={`${song.AlbumArts}`}
              title={song.title}
              album={song.Album.name}
              artist={song.Artists[0].name}
              key={index}
              songId={song.id}
            />
          ))
        )}
      </div>
    </>
  );
};
export default Result;
