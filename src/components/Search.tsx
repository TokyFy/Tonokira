import React, { FunctionComponent, useEffect, useState } from "react";
import { Search as SearchIcon } from "lucide-react";

interface OwnProps {
  onClick: (str: string) => void;
  InputValue?: string;
  placeHolder?: string;
}

type Props = OwnProps;

const Search: FunctionComponent<Props> = ({ onClick, InputValue, placeHolder }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(InputValue || "");
  }, [InputValue]);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      onClick(value);
    }
  };

  return (
    <div className="relative flex">
      <SearchIcon 
        size={16} 
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
      <input
        className="spotify-search w-full pl-10"
        type="text"
        name="search"
        spellCheck={false}
        autoComplete="off"
        placeholder={placeHolder || "What do you want to listen to?"}
        onChange={(el) => setValue(el.target.value)}
        onKeyDown={handleKeyDown}
        value={value}
      />
    </div>
  );
};

export default Search;