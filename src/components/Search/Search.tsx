import React, { FunctionComponent, useEffect, useState } from "react";
import style from "./Search.module.scss";
import Pointer from "../../Assets/image/pointer.svg";

interface OwnProps {
  onClick: (str: string) => void;
  InputValue?: string;
  placeHolder?: string;
}

type Props = OwnProps;

const Search: FunctionComponent<Props> = ({
  onClick,
  InputValue,
  placeHolder,
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(InputValue || "");
  }, []);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      onClick(value);
    }
  };

  return (
    <div className={style.search}>
      <input
        type="text"
        name="search"
        id="music"
        autoComplete={"off"}
        placeholder={placeHolder || "Type here "}
        onChange={(el) => setValue(el.target.value)}
        onKeyDown={handleKeyDown}
        value={value}
      />
      <span className={style.pointer}>
        <img src={Pointer} alt={""} onClick={() => onClick(value)} />
      </span>
    </div>
  );
};

export default Search;
