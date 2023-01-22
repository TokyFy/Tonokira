import React, { FunctionComponent } from "react";
import style from "./Search.module.scss";
import Pointer from "../../Assets/image/pointer.svg";

interface OwnProps {}

type Props = OwnProps;

const Search: FunctionComponent<Props> = (props) => {
  return (
    <div className={style.search}>
      <input
        type="text"
        name="search"
        id="music"
        autoComplete={"off"}
        placeholder={"Find your song’s lyrics now !!"}
      />
      <span className={style.pointer}>
        <img src={Pointer} alt={""} />
      </span>
    </div>
  );
};

export default Search;
