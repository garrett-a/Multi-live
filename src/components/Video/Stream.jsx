import React, { Fragment, useContext } from "react";
import ThemeContext from "../../store/theme-context";

import ReactPlayer from "react-player";

import classes from "./Stream.module.css";

const Stream = (props) => {
  const ctx = useContext(ThemeContext);

  const wrapperStyles = `${
    ctx.searchedStreams.length === 3
      ? `${classes.playerOne3Streams}`
      : `${classes.wrapper}`
  }`;

  return (
    <Fragment>
      {ctx.searchedStreams.map((label) => (
        <div className={wrapperStyles} key={label}>
          <ReactPlayer
            key={label}
            className={classes.player}
            url={`https://www.twitch.tv/${label}`}
            width="100%"
            height="100%"
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
