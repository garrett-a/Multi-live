import React, { Fragment } from "react";

import ReactPlayer from "react-player";

import classes from "./Stream.module.css";

const Stream = () => {
  return (
    <Fragment>
      <div className={classes.wrapper}>
        <ReactPlayer
          className={classes.player}
          url="https://www.twitch.tv/ziqoftw"
          width="100%"
          height="100%"
        />
      </div>
      <div className={classes.wrapper2}>
        <ReactPlayer
          className={classes.player}
          url="https://www.twitch.tv/ziqoftw"
          width="100%"
          height="100%"
        />
      </div>
    </Fragment>
  );
};

export default Stream;
