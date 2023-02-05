import React, { FunctionComponent } from "react";
import style from "./Lyrics.module.scss";
import { useLocation, useParams } from "react-router-dom";
import { Getlyrics } from "../../service";
import { useQuery } from "react-query";
import LyricsSkeleton from "./LyricsSkeleton";

interface OwnProps {}

type Props = OwnProps;

const Lyrics: FunctionComponent<Props> = (props) => {
  const { id } = useParams();

  const { title, artist, image } = useLocation().state;

  const { isLoading, isError, data, error, refetch } = useQuery(
    ["search", id],
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
        <div className={style.albumCover}>
          <img src={image} alt={"album cover"} />
        </div>
        <p className={style.title}>{title}</p>
        <p className={style.artist}>By {artist}</p>
      </div>
      {isLoading ? (
        <LyricsSkeleton />
      ) : (
        <div className={style.lyricsContent}>
          {lyrics?.map((el, index) => (
            <p className={style.lyricsParagraph} key={index}>
              {el}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Lyrics;
