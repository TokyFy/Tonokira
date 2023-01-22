import React, { FunctionComponent } from "react";
import style from "./Copyright.module.scss";
import heart from "../../Assets/image/heart.svg";

interface OwnProps {}

type Props = OwnProps;

const Copyright: FunctionComponent<Props> = (props) => {
  return (
    <div className={style.copyright}>
      <p>
        Made with{" "}
        <span>
          <img src={heart} alt={""} />
        </span>
        by <a href={"toky.vercel.app"}> Toky</a>
      </p>
    </div>
  );
};

export default Copyright;
