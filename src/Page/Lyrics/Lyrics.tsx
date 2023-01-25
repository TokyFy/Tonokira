import React, { FunctionComponent } from "react";
import style from "./Lyrics.module.scss";

interface OwnProps {}

type Props = OwnProps;

const lyrics = `[00:00.000] 作词 : Clairo\\n[00:01.000] 作曲 :
        Clairo\\n[00:17.54]Sometimes I feel like I just wanna go back to my old
        ways\\n[00:21.81]You're telling me I'm silly,\\n[00:23.57]\\"it's no fun in
        the old days\\"\\n[00:26.29]I'm such a romantic,\\n[00:27.79]I never
        remember how things truly happened\\n[00:30.95]I guess you're
        attractive\\n[00:32.77]Or something\\n[00:34.93]\\"Live in the
        moment\\"\\n[00:36.58]That's what they told me\\n[00:38.14]But what ever
        happened\\n[00:39.65]To when you would hold me\\n[00:41.30]And hold
        me\\n[00:42.35]And hold me\\n[00:43.56]\\"Girlfriend\\" or \\"girl that's a
        friend\\"\\n[00:45.87]It's easy just to pretend\\n[00:47.87]That we don't
        have something real\\n[00:50.18]It's just how we feel\\n[00:55.69]We
        feel\\n[00:58.55]Oh, it's just how we feel\\n[01:04.38]How we
        feel\\n[01:09.72]I'm feeling something, right?\\n[01:11.53]I'm feeling
        something, right?\\n[01:14.45]I'm feeling something,
        right?\\n[01:15.90]I'm feeling something, right?\\n[01:18.87]I'm feeling
        something, right?\\n[01:20.27]I'm feeling something, right?\\n[01:27.19]I
        wanna be the one you think about at night\\n[01:30.95]And I wanna be the
        one that you would put up a fight for\\n[01:36.38]You know that I
        adore\\n[01:38.49]That even when you're bored\\n[01:40.60]I'd buy you
        anything and everything I can't afford\\n`
  .split("\\n")
  .slice(2)
  .map((el) => {
    return el
      .replace(/\[\d{2,3}:\d{2,3}\.\d{2,3}]/, "")
      .replace(/[^a-zA-Z ]/g, "");
  });

const Lyrics: FunctionComponent<Props> = (props) => {
  return (
    <div className={style.lyrics}>
      <div className={style.lyricsHeader}>
        <p className={style.title}>Amoeba</p>
        <p className={style.artist}>By Clairo</p>
      </div>
      <div className={style.lyricsContent}>
        {lyrics.map((el, index) => (
          <p
            className={`${style.lyricsParagraph} ${
              index % 4 === 0 ? style.verse : ""
            }`}
          >
            {el}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Lyrics;
