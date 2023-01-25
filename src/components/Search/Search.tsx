import React, { FunctionComponent, useState } from "react";
import style from "./Search.module.scss";
import Pointer from "../../Assets/image/pointer.svg";

interface OwnProps {
  onClick: (str: string) => void;
}

type Props = OwnProps;

const Search: FunctionComponent<Props> = ({ onClick }) => {
  const [value, setValue] = useState("");

  return (
    <div className={style.search}>
      <input
        type="text"
        name="search"
        id="music"
        autoComplete={"off"}
        placeholder={"Find your song’s lyrics now !!"}
        onChange={(el) => setValue(el.target.value)}
      />
      <span className={style.pointer}>
        <img src={Pointer} alt={""} onClick={() => onClick(value)} />
      </span>
    </div>
  );
};

export default Search;
