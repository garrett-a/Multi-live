import React, { Fragment, useRef, useContext } from "react";
import ThemeContext from "../../store/theme-context";

import ReactPlayer from "react-player";

import classes from "./Stream.module.css";

const Stream = (props) => {
  // const wrapperRef = useRef("");

  // const wrapper = wrapperRef.current;
  // const stylesWrapper = `${classes.wrapperOneStream} ${
  //   ctx.searchedStreams.length === 2 && classes.wrapperTwoStreams
  // }`;
  // const stylesPlayer = `${classes.player1} ${
  //   ctx.searchedStreams.length === 2 && classes.player2
  // }`;
  const ctx = useContext(ThemeContext);
  const stylesWrapper = `${
    ctx.searchedStreams.length === 1 ? `${classes.wrapperOneStream}` : ""
  } ${ctx.searchedStreams.length === 2 ? `${classes.wrapperTwoStreams}` : ""}${
    ctx.searchedStreams.length === 3 ? `${classes.wrapperThreeStreams}` : ""
  }`;
  const stylesPlayer = `${
    ctx.searchedStreams.length === 1 ? `${classes.player1}` : ""
  } ${ctx.searchedStreams.length === 2 ? `${classes.player2}` : ""} ${
    ctx.searchedStreams.length === 3 ? `${classes.player3}` : ""
  }`;

  console.log(stylesPlayer);

  return (
    <Fragment>
      {ctx.searchedStreams.map((label) => (
        <div className={stylesWrapper} key={label}>
          <ReactPlayer
            key={label}
            className={stylesPlayer}
            url={`https://www.twitch.tv/${label}`}
            width="100%"
            theme="dark"
            playing={true}
          />
        </div>
      ))}
    </Fragment>
  );
};

export default Stream;

// className={stylesWrapper}
