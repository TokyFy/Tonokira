import React, { FunctionComponent } from "react";
import Quotes from "../../components/Quotes/Quotes";
import Search from "../../components/Search/Search";
interface OwnProps {}

type Props = OwnProps;

const Home: FunctionComponent<Props> = (props) => {
  return (
    <>
      <Quotes />
      <Search />
    </>
  );
};
export default Home;
