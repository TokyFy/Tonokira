import React, { FunctionComponent, useEffect, useState } from "react";
import style from "./Result.module.scss";
import MusicCards from "../../components/MusicCard/MusicCards";
import { MusicCardSkeleton } from "../../components/MusicCard/MusicCards";
import Search from "../../components/Search/Search";

import { useSearchParams } from "react-router-dom";
import { ISongs, search } from "../../service/musicService";
import Error from "../../components/Error/Error";

interface OwnProps {}

type Props = OwnProps;

const Result: FunctionComponent<Props> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const query = searchParams.get("q");
  const [Results, setResults] = useState<ISongs[]>([]);

  const searchHandler = (str: string) => {
    if (str.trim() !== "") {
      setIsLoading(true);
      setError(false);
      setResults([]);
      setSearchParams({ q: str });
      search(str)
        .then((result) => setResults(result))
        .catch(() => setError(true))
        .finally(() => setIsLoading(false));
    }
  };

  useEffect(() => {
    if (query !== null && query !== "") {
      searchHandler(query || "");
    } else {
      setIsLoading(false);
      setError(true);
    }
  }, []);

  return (
    <>
      <Search
        onClick={searchHandler}
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
        ) : error ? (
          <Error />
        ) : (
          Results.map((song, index) => (
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
