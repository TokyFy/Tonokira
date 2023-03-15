import React, { FunctionComponent } from "react";
import style from "./MusicCards.module.scss";
import { useNavigate } from "react-router-dom";
import { IMAGE_PROXY_URL } from "../../constant";
import { useQuery } from "react-query";
import { GetPictures } from "../../service";

interface OwnProps {
  image: string;
  title: string;
  album: string;
  artist: string;
  songId: string;
  ImageId?: string;
  ArtistId: string;
}
type Props = OwnProps;

const MusicCards: FunctionComponent<Props> = ({
  image,
  title,
  artist,
  album,
  songId,
  ImageId,
  ArtistId,
}) => {
  const navigate = useNavigate();

  const { isLoading, isError, data, error, refetch } = useQuery(
    ["Pictures", `${ImageId}${title}`],
    ({}) => (ImageId ? GetPictures(`${ImageId}`) : { url: image }),
    {
      staleTime: 5 * (60 * 1000),
      cacheTime: 2.5 * (60 * 1000),
    }
  );

  const cardClickHandler = () => {
    navigate(`/lyrics/${songId}`, {
      state: {
        title: title,
        artist: artist,
        image: data?.url,
      },
    });
  };

  const ArtistNameClickHandler = () => {
    navigate(`/artist/${ArtistId}`);
    console.log("CLICKERDDD");
  };

  return (
    <div className={style.musicCard} onClick={() => cardClickHandler()}>
      <div className={style.image}>
        {isLoading ? null : (
          <img src={`${IMAGE_PROXY_URL}/tr:w-400/${data?.url}`} alt="" />
        )}
      </div>
      <p className={style.description}>
        <span className={style.title}>{title}</span>
        <span className={style.album}>{album}</span>
        <span
          onClick={(event) => {
            event.stopPropagation();
            ArtistNameClickHandler();
          }}
          className={style.artist}
        >
          By {artist}
        </span>
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
