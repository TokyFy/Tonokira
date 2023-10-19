import React, { FunctionComponent } from "react";
import style from "./Layout.module.scss";

interface OwnProps {
  children: JSX.Element | JSX.Element[];
}

type Props = OwnProps;

const Row: FunctionComponent<Props> = ({ children }) => {
  return <div className="max-w-md px-6">{children}</div>;
};

export { Row };
