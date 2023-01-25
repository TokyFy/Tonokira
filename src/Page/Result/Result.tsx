import React, { FunctionComponent, useState } from "react";
import style from "./Result.module.scss";
import MusicCards from "../../components/MusicCard/MusicCards";
import Search from "../../components/Search/Search";

import { useSearchParams } from "react-router-dom";
import { ISongs } from "../../service/musicService";

interface OwnProps {}
type Props = OwnProps;

import image1 from "../../Assets/image/Dummy/clairo(1).jpg";
import image2 from "../../Assets/image/Dummy/clairo(2).jpg";
import image3 from "../../Assets/image/Dummy/clairo(3).jpg";
import image4 from "../../Assets/image/Dummy/clairo(4).png";

const Result: FunctionComponent<Props> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q");

  const [Results, setResults] = useState<ISongs[]>([]);

  const Finder = new NeteaseFinder();

  const searchHandler = (str: string) => {
    Finder.search(str).then((result) => setResults(result));
  };

  return (
    <>
      <Search onClick={searchHandler} />
      <div className={style.result}>
        {Results.map((song) => (
          <MusicCards
            image={`${song.AlbumArts}`}
            title={song.title}
            album={song.Album.name}
            artist={song.Artists[0].name}
          />
        ))}
      </div>
    </>
  );
};
export default Result;
