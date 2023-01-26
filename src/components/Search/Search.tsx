import React, { FunctionComponent, useEffect, useState } from "react";
import style from "./Search.module.scss";
import Pointer from "../../Assets/image/pointer.svg";

interface OwnProps {
  onClick: (str: string) => void;
  InputValue?: string;
}

type Props = OwnProps;

const Search: FunctionComponent<Props> = ({ onClick, InputValue }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(InputValue || "");
  }, []);

  return (
    <div className={style.search}>
      <input
        type="text"
        name="search"
        id="music"
        autoComplete={"off"}
        placeholder={"Find your song’s lyrics now !!"}
        onChange={(el) => setValue(el.target.value)}
        value={value}
      />
      <span className={style.pointer}>
        <img src={Pointer} alt={""} onClick={() => onClick(value)} />
      </span>
    </div>
  );
};

export default Search;
