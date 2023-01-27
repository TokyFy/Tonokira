import React, { FunctionComponent } from "react";
import Quotes from "../../components/Quotes/Quotes";
import Search from "../../components/Search/Search";
import { useNavigate } from "react-router-dom";

interface OwnProps {}

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
      <Quotes />
      <Search onClick={clickHandler} />
    </>
  );
};
export default Home;
