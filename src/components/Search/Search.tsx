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
        <div className={"flex border border-neutral-400 border-dashed h-10 items-center px-2 rounded bg-white"}>
            <input
                className={"focus:outline-0 grow h-full text-md font-primary text-purple-500  placeholder:text-neutral-400"}
                type="text"
                name="search"
                spellCheck={false}
                autoComplete={"off"}
                placeholder={placeHolder || "Ur best song..."}
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
