import React, { FunctionComponent } from "react";
import style from "./MusicCards.module.scss";
import { useNavigate } from "react-router-dom";
import { IMAGE_PROXY_URL } from "../../constant";

interface OwnProps {
  image: string;
  title: string;
  album: string;
  artist: string;
  songId: string;
}
type Props = OwnProps;

const MusicCards: FunctionComponent<Props> = ({
  image,
  title,
  artist,
  album,
  songId,
}) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/lyrics/${songId}`, {
      state: { title: title, artist: artist, image: image },
    });
  };

  return (
    <div className={style.musicCard} onClick={() => clickHandler()}>
      <div className={style.image}>
        <img src={`${IMAGE_PROXY_URL}/tr:w-400/${image}`} alt="" />
      </div>
      <p className={style.description}>
        <span className={style.title}>{title}</span>
        <span className={style.album}>{album}</span>
        <span className={style.artist}>By {artist}</span>
      </p>
    </div>
  );
};

export const MusicCardSkeleton: FunctionComponent = () => {
  return (
    <div className={style.musicCardSkeleton}>
      <div className={style.image}></div>
      <p className={style.description}></p>
    </div>
  );
};

export default MusicCards;
