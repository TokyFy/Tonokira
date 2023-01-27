import React, { FunctionComponent, useEffect, useState } from "react";
import style from "./Lyrics.module.scss";
import { useParams } from "react-router-dom";
import { Getlyrics } from "../../service";

interface OwnProps {}

type Props = OwnProps;

const Lyrics: FunctionComponent<Props> = (props) => {
  const [lyrics, setLyrics] = useState<Array<string>>([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      Getlyrics(id).then((res) => {
        setLyrics(
          res.lyric
            .split("\n")
            .slice(2)
            .map((el) => {
              return el
                .replace(/\[\d{2,3}:\d{2,3}\.\d{2,3}]/, "")
                .replace(/[^a-zA-Z ]/g, "");
            })
        );
      });
    }
  }, []);

  return (
    <div className={style.lyrics}>
      <div className={style.lyricsHeader}>
        <p className={style.title}>Amoeba</p>
        <p className={style.artist}>By Clairo</p>
      </div>
      <div className={style.lyricsContent}>
        {lyrics.map((el, index) => (
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
