import React, {FunctionComponent} from "react";
import {useNavigate} from "react-router-dom";
import {Music3} from "lucide-react";

interface OwnProps {
}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {
    const navigate = useNavigate();

    return (
        <div className={"py-2 flex items-center justify-center border-bs border-dashed border-neutral-400"}>
            <div className={"text-purple-700 rotate-3 cursor-pointer"} onClick={() => navigate("/")}>
                <Music3/>
            </div>
        </div>
    );
};

export default Header;
