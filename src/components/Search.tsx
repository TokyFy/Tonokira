import React, {FunctionComponent, useEffect, useState} from "react";
import {Search as SearchIcon} from "lucide-react"

interface OwnProps {
    onClick: (str: string) => void;
    InputValue?: string;
    placeHolder?: string;
}

type Props = OwnProps;

const Search: FunctionComponent<Props> = ({ onClick, InputValue, placeHolder,}) => {
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
        <div className="relative group">
            <input
                className="w-full h-12 pl-12 pr-4 bg-gray-700/50 border border-gray-600/50 rounded-full text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent hover:bg-gray-700/70 transition-all"
                type="text"
                name="search"
                spellCheck={false}
                autoComplete={"off"}
                placeholder={placeHolder || "What do you want to listen to?"}
                onChange={(el) => setValue(el.target.value)}
                onKeyDown={handleKeyDown}
                value={value}
            />
            <SearchIcon 
                size={20} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-white transition-colors"
            />
            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-400 text-black font-semibold px-4 py-1.5 rounded-full text-sm transition-all hover:scale-105"
                onClick={() => onClick(value)}
            >
                Search
            </button>
        </div>
    );
};

export default Search;
