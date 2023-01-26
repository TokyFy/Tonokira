import React, { FunctionComponent, useState } from "react";
import style from "./Result.module.scss";
import MusicCards from "../../components/MusicCard/MusicCards";
import Search from "../../components/Search/Search";

import { useSearchParams } from "react-router-dom";
import { ISongs, search } from "../../service/musicService";

interface OwnProps {}
type Props = OwnProps;

const Result: FunctionComponent<Props> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q");

  const [Results, setResults] = useState<ISongs[]>([]);

  const searchHandler = (str: string) => {
    setResults([]);
    search(str).then((result) => setResults(result));
  };

  return (
    <>
      <Search onClick={searchHandler} />
      <div className={style.result}>
        {Results.map((song, index) => (
          <MusicCards
            image={`${song.AlbumArts}`}
            title={song.title}
            album={song.Album.name}
            artist={song.Artists[0].name}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
export default Result;
