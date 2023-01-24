import React, { FunctionComponent } from "react";
import style from "./Result.module.scss";
import MusicCards from "../../components/MusicCard/MusicCards";
import Search from "../../components/Search/Search";
interface OwnProps {}
type Props = OwnProps;

import image1 from "../../assets/image/Dummy/clairo (1).jpg";
import image2 from "../../assets/image/Dummy/clairo (2).jpg";
import image3 from "../../assets/image/Dummy/clairo (3).jpg";
import image4 from "../../assets/image/Dummy/clairo (4).png";

const Result: FunctionComponent<Props> = (props) => {
  return (
    <>
      <Search />
      <div className={style.result}>
        <MusicCards
          image={image1}
          title={"Amoeba"}
          album={"Sling"}
          artist={"clairo"}
        />
        <MusicCards
          image={image2}
          title={"Partridge"}
          album={"Sling"}
          artist={"clairo"}
        />
        <MusicCards
          image={image3}
          title={"Wade"}
          album={"Sling"}
          artist={"clairo"}
        />
        <MusicCards
          image={image4}
          title={"Zinnias"}
          album={"Sling"}
          artist={"clairo"}
        />
      </div>
    </>
  );
};
export default Result;
