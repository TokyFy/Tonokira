import React, { FunctionComponent } from "react";
import style from "./Lyrics.module.scss";

const LyricsSkeleton: FunctionComponent = () => {
  return (
    <div className={style.LyricsSkeleton}>
      {[...Array(20)].map((value, index) => (
        <p key={index}></p>
      ))}
    </div>
  );
};

export default LyricsSkeleton;
