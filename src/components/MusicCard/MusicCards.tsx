import React, { FunctionComponent } from "react";
import style from "./MusicCards.module.scss";

interface OwnProps {
  image: string;
  title: string;
  album: string;
  artist: string;
}
type Props = OwnProps;

const MusicCards: FunctionComponent<Props> = ({
  image,
  title,
  artist,
  album,
}) => {
  return (
    <div className={style.musicCard}>
      <div className={style.image}>
        <img src={image} alt="" />
      </div>
      <p className={style.description}>
        <span className={style.title}>{title}</span>
        <span className={style.album}>{album}</span>
        <span className={style.artist}>By {artist}</span>
      </p>
    </div>
  );
};

export default MusicCards;
