import React, {FunctionComponent} from "react";
import {useNavigate} from "react-router-dom";
import {Asterisk} from "lucide-react";

interface OwnProps {
}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {
    const navigate = useNavigate();

    return (
        <div className={"py-2 flex items-center border-bs border-dashed border-neutral-400"}>
            <div className={"cursor-pointer hover:rotate-90 duration-1000"} onClick={() => navigate("/")}>
                <Asterisk size={32}/>
            </div>
        </div>
    );
};

export default Header;
