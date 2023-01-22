import React, { FunctionComponent } from "react";
import style from "./Quote.module.scss";

interface OwnProps {}

type Props = OwnProps;

const Quotes: FunctionComponent<Props> = (props) => {
  return (
    <div className={style.quotes}>
      <p className={style.text}>
        “ Lyrics are so important, but they're really underrated. ”
      </p>
      <p className={style.author}>Billie Eilish</p>
    </div>
  );
};

export default Quotes;
