import React, { Fragment, useRef, useContext } from "react";
import ThemeContext from "../../store/theme-context";

import ReactPlayer from "react-player";

import classes from "./Stream.module.css";

const Stream = (props) => {
  // const wrapperRef = useRef("");
  const ctx = useContext(ThemeContext);

  // const wrapper = wrapperRef.current;
  // wrapper.className = `${classes.wrapperOneStream} ${
  //   ctx.searchedStreams.length === 2 && classes.wrapperTwoStreams
  // }`;
  // const stylesPlayer = `${classes.player1} ${
  //   ctx.searchedStreams.length === 2 && classes.player2
  // }`;

  return (
    <Fragment>
      {ctx.searchedStreams.map((label) => (
        <div className={classes.wrapperTwoStreams} key={label}>
          <ReactPlayer
            className={classes.player2}
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
