import React, { FunctionComponent } from "react";
import style from "./Layout.module.scss";

interface OwnProps {
  children: JSX.Element | JSX.Element[];
}

type Props = OwnProps;

const Row: FunctionComponent<Props> = ({ children }) => {
  return <div className={style.row}>{children}</div>;
};

export { Row };
