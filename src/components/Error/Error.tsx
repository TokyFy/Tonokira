import React, { FunctionComponent } from "react";
import style from "./Error.module.scss";

interface OwnProps {}
type Props = OwnProps;

const Error: FunctionComponent<Props> = (props) => {
  return (
    <div className={style.error}>
      <p>Sorry , something went wrong !</p>
    </div>
  );
};

export default Error;
