import React, { FunctionComponent } from 'react';
import style from "./Header.module.scss";
import Logo from "../../Assets/image/logo.svg";

interface OwnProps {}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {
  return (
      <div className={style.Header}>
          <div className={style.logo}>
              <img src={Logo} alt={"Tonokira"}/>
          </div>
      </div>
  );
};

export default Header;
