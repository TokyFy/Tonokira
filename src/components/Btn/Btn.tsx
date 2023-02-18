import React, { FunctionComponent } from "react";
import style from "./BtnStyle.module.scss";

interface props {
  value: String;
  onClick: () => void;
}

const Btn: FunctionComponent<props> = ({ value, onClick }) => {
  return (
    <div onClick={onClick} className={style.Btn}>
      {value}
    </div>
  );
};

export default Btn;
