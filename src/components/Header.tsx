import React, {FunctionComponent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Sparkles, Paintbrush2, Circle, CircleDashed, CircleSlashed, CircleOff, CircleDot} from "lucide-react";

const Header: FunctionComponent = () => {

    const [dark, setDark] = useState(false);

    function switchTheme() {
        document.documentElement.classList.toggle("dark");
        setDark(!dark)
    }

    const navigate = useNavigate();

    return (
        <div className={"flex items-center justify-between dark:border-gray-600 p-1"}>
            <div className={"text-xs font-bold cursor-pointer hover:underline transition-transform duration-500 text-neutral-700 dark:text-neutral-300"} onClick={() => navigate("/")}>
               # Lirikisa
            </div>
            <div className={"cursor-pointer text-neutral-700 dark:text-neutral-300"} onClick={() => switchTheme()}>
                {dark ? <CircleDot absoluteStrokeWidth size={13}/> : <Circle absoluteStrokeWidth size={13}/>}
            </div>
        </div>
    );
};

export default Header;
