import React, { FunctionComponent } from "react";
import style from "./Artist.module.scss";
import { MusicCardSkeleton } from "../../components/MusicCard/MusicCards";

const ArtistSkeleton: FunctionComponent = () => {
  return (
    <>
      <div className={style.artistSkeleton}>
        <div className={style.artistHeader}>
          <div className={style.image}></div>
          <div className={style.artistName}></div>
        </div>

        <div className={style.songs}>
          <MusicCardSkeleton />
          <MusicCardSkeleton />
          <MusicCardSkeleton />
          <MusicCardSkeleton />
          <MusicCardSkeleton />
          <MusicCardSkeleton />
          <MusicCardSkeleton />
          <MusicCardSkeleton />
        </div>
      </div>
    </>
  );
};

export default ArtistSkeleton;
