import React, {FunctionComponent, useEffect, useState} from "react";
import {Sparkles} from "lucide-react"

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
        <div className={"flex border border-neutral-300 h-10 items-center px-2 rounded bg-white hover:border-neutral-400"}>
            <input
                className={"focus:outline-0 grow h-full text-md font-primary text-neutral-700 font-bold placeholder:text-neutral-400"}
                type="text"
                name="search"
                spellCheck={false}
                autoComplete={"off"}
                placeholder={placeHolder || "Your best song ..."}
                onChange={(el) => setValue(el.target.value)}
                onKeyDown={handleKeyDown}
                value={value}
            ></input>
            <div
                className="cursor-pointer text-neutral-500 hover:text-neutral-800 "
                onClick={() => onClick(value)}
            >
                <Sparkles size={18}/>
            </div>
        </div>
    );
};

export default Search;
