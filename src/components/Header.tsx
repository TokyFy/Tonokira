import React, {FunctionComponent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Asterisk, Moon, Sun} from "lucide-react";

const Header: FunctionComponent = () => {

    const [dark, setDark] = useState(false);

    function switchTheme() {
        document.documentElement.classList.toggle("dark");
        setDark(!dark)
    }

    const navigate = useNavigate();

    return (
        <div className={"py-2 flex items-center justify-between border-bs border-dashed border-neutral-400"}>
            <div className={"cursor-pointer hover:rotate-90 transition-transform duration-500"} onClick={() => navigate("/")}>
                <Asterisk size={32}/>
            </div>
            <div className={"cursor-pointer opacity-50"} onClick={() => switchTheme()}>
                {dark ? <Moon size={16}/> : <Sun size={16}/>}
            </div>
        </div>
    );
};

export default Header;
