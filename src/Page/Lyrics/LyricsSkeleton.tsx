import React, { FunctionComponent } from "react";
import style from "./Lyrics.module.scss";

const LyricsSkeleton: FunctionComponent = () => {
  return (
    <div className={style.LyricsSkeleton}>
      {[...Array(20)].map((value, index) => (
        <p key={index} className={index % 4 === 0 ? style.verse : ""}></p>
      ))}
    </div>
  );
};

export default LyricsSkeleton;
