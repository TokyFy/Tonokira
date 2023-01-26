import React, { FunctionComponent, useEffect, useState } from "react";
import style from "./Result.module.scss";
import MusicCards from "../../components/MusicCard/MusicCards";
import { MusicCardSkeleton } from "../../components/MusicCard/MusicCards";
import Search from "../../components/Search/Search";

import { useSearchParams } from "react-router-dom";
import { ISongs, search } from "../../service/musicService";

interface OwnProps {}
type Props = OwnProps;

const Result: FunctionComponent<Props> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const query = searchParams.get("q");
  const [Results, setResults] = useState<ISongs[]>([]);

  useEffect(() => {
    if (query) {
      search(`${query}`).then((result) => {
        setResults(result);
        setIsLoading(false);
      });
    }
  }, [query]);

  const searchHandler = (str: string) => {
    setResults([]);
    setSearchParams({ q: str });
    search(str).then((result) => setResults(result));
    setIsLoading(true);
  };

  return (
    <>
      <Search onClick={searchHandler} InputValue={query || ""} />
      <div className={style.result}>
        {isLoading ? (
          <>
            <MusicCardSkeleton />
            <MusicCardSkeleton />
            <MusicCardSkeleton />
            <MusicCardSkeleton />
          </>
        ) : (
          Results.map((song, index) => (
            <MusicCards
              image={`${song.AlbumArts}`}
              title={song.title}
              album={song.Album.name}
              artist={song.Artists[0].name}
              key={index}
            />
          ))
        )}
      </div>
    </>
  );
};
export default Result;
