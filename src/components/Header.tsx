import React, {FunctionComponent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Sparkles , Paintbrush2 , Circle , CircleDashed , CircleSlashed} from "lucide-react";

const Header: FunctionComponent = () => {

    const [dark, setDark] = useState(false);

    function switchTheme() {
        document.documentElement.classList.toggle("dark");
        setDark(!dark)
    }

    const navigate = useNavigate();

    return (
        <div className={"flex items-center justify-between border rounded bg-neutral-50 dark:bg-gray-900 dark:border-gray-600 p-1"}>
            <div className={"cursor-pointer hover:rotate-90 transition-transform duration-500 text-neutral-700 dark:text-neutral-300"} onClick={() => navigate("/")}>
                <Sparkles size={18}/>
            </div>
            <div className={"cursor-pointer text-neutral-700 dark:text-neutral-300"} onClick={() => switchTheme()}>
                {dark ? <CircleDashed absoluteStrokeWidth size={16}/> : <Circle absoluteStrokeWidth size={16}/>}
            </div>
        </div>
    );
};

export default Header;
