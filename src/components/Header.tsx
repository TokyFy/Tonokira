import React, {FunctionComponent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Music, Sun, Moon} from "lucide-react";

const Header: FunctionComponent = () => {

    const [dark, setDark] = useState(false);

    function switchTheme() {
        document.documentElement.classList.toggle("dark");
        setDark(!dark)
    }

    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between p-6 mb-6">
            <div 
                className="flex items-center gap-3 cursor-pointer group" 
                onClick={() => navigate("/")}
            >
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Music size={16} className="text-black" />
                </div>
                <h1 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                    Lirikisa
                </h1>
            </div>
            <button 
                className="p-2 rounded-full bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white transition-all"
                onClick={() => switchTheme()}
            >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
        </div>
    );
};

export default Header;
