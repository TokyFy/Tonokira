import React, { FunctionComponent } from "react";
import style from "./Header.module.scss";
import Logo from "../../Assets/image/logo.svg";
import { useNavigate } from "react-router-dom";

interface OwnProps {}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {
  const navigate = useNavigate();

  return (
    <div className={style.Header}>
      <div className={style.logo} onClick={() => navigate("/")}>
        <img src={Logo} alt={"Tonokira"} />
      </div>
    </div>
  );
};

export default Header;
