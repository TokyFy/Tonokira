import React, { FunctionComponent } from "react";
import style from "./Quote.module.scss";

interface OwnProps {}

type Props = OwnProps;

const Quotes: FunctionComponent<Props> = (props) => {
  return (
    <div className={"text-neutral-700 flex flex-col items-end w-max gap-2 py-8"}>
      <p className={"text-md"}>
        “ Lyrics are so important, but they're really underrated. ”
      </p>
      <p className={"text-[13px] text-neutral-400 underline"}>Billie Eilish</p>
    </div>
  );
};

export default Quotes;
