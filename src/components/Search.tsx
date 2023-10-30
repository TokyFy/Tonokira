import React, {FunctionComponent, useEffect, useState} from "react";
import {Sparkles, CornerRightDown, Paintbrush, CornerDownRight, CornerDownLeft} from "lucide-react"

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
        <div className={"group flex border-b border-neutral-200 dark:border-gray-600 h-10 items-center px-2  hover:border-neutral-800 dark:hover:border-gray-400"}>
            <input
                className={"focus:outline-0 grow h-full text-md font-primary text-neutral-700 placeholder:text-neutral-400 bg-transparent dark:text-gray-200 dark:placeholder:text-gray-600"}
                type="text"
                name="search"
                spellCheck={false}
                autoComplete={"off"}
                placeholder={placeHolder || "Type your best song here..."}
                onChange={(el) => setValue(el.target.value)}
                onKeyDown={handleKeyDown}
                value={value}
            ></input>
            <div
                className="cursor-pointer text-neutral-400 hover:text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-800"
                onClick={() => onClick(value)}
            >
                <CornerDownLeft absoluteStrokeWidth size={13}/>
            </div>
        </div>
    );
};

export default Search;
