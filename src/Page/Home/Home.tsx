import React, {FunctionComponent} from "react";
import Search from "../../components/Search";
import {useNavigate} from "react-router-dom";
import Copyright from "../../components/Copyright";


interface OwnProps {
}

type Props = OwnProps;

const Home: FunctionComponent<Props> = (props) => {
    const navigate = useNavigate();

    const clickHandler = (str: string) => {
        if (!(str.trim() === "")) {
            navigate(`search?q=${str}`);
        }
    };

    return (
        <>
            <div className="my-8">
                <Search onClick={clickHandler}/>
            </div>
            <div>
                <Copyright/>
            </div>
        </>

    );
};
export default Home;
