import React, { Fragment } from "react";

import ReactPlayer from "react-player";

import classes from "./Stream.module.css";

const Stream = (props) => {
  return (
    <Fragment>
      {props.searchedStreams.map((label) => (
        <div key={label}>
          <ReactPlayer
            className={classes.player}
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
