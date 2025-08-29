import React, {FunctionComponent} from "react";

interface OwnProps {
}

type Props = OwnProps;

const Copyright: FunctionComponent<Props> = (props) => {
    return (
        <div className="text-gray-500 hover:text-gray-300 transition-colors">
            <p className="text-sm leading-relaxed">
                Made with <span className="text-red-400">♥</span> by{" "}
                <a 
                    className="font-semibold text-green-400 hover:text-green-300 hover:underline transition-colors" 
                    href="https://toky.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Toky
                </a>
            </p>
        </div>
    );
};

export default Copyright;
