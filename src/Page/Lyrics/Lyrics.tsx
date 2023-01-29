import React, { FunctionComponent, useState } from "react";
import style from "./Lyrics.module.scss";
import { useParams } from "react-router-dom";
import { Getlyrics } from "../../service";
import { useQuery } from "react-query";

interface OwnProps {}

type Props = OwnProps;

const Lyrics: FunctionComponent<Props> = (props) => {
  const { id } = useParams();

  const [query, setQuery] = useState(id);

  const { isLoading, isError, data, error, refetch } = useQuery(
    ["search", query],
    ({}) => Getlyrics(`${id}`),
    {
      staleTime: 5 * (60 * 1000),
      cacheTime: 2.5 * (60 * 1000),
    }
  );

  const lyrics = data?.lyric
    .split("\n")
    .slice(2)
    .map((el) => {
      return el
        .replace(/\[\d{2,3}:\d{2,3}\.\d{2,3}]/, "")
        .replace(/[^a-zA-Z ]/g, "");
    });

  return (
    <div className={style.lyrics}>
      <div className={style.lyricsHeader}>
        <p className={style.title}>Amoeba</p>
        <p className={style.artist}>By Clairo</p>
      </div>
      <div className={style.lyricsContent}>
        {lyrics?.map((el, index) => (
          <p
            className={`${style.lyricsParagraph} ${
              index % 4 === 0 ? style.verse : ""
            }`}
            key={index}
          >
            {el}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Lyrics;
