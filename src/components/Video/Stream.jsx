import React, { Fragment, useContext } from "react";
import StoreContext from "../../store/store-context";

import ReactPlayer from "react-player";

import classes from "./Stream.module.css";

const Stream = () => {
  const ctx = useContext(StoreContext);

  const deleteStream = (url) => {
    const newStreams = ctx.searchedStreams.filter((stream) => stream !== url);
    ctx.setSearchedStreams(newStreams);

    if (ctx.searchedStreams.length <= 1) {
      ctx.setSearchedToChat("");
      ctx.setShowStream(!ctx.showStream);
    }
  };

  const wrapperStyles = `${
    ctx.searchedStreams.length === 3
      ? `${classes.playerOne3Streams}`
      : `${classes.wrapper}`
  }`;

  return (
    <Fragment>
      {ctx.searchedStreams.map((url) => (
        <div className={wrapperStyles} key={url} id={url}>
          <div className={classes.overlay}>
            <i
              onClick={() => {
                deleteStream(url);
              }}
              className="fa-solid fa-xmark"
            ></i>
          </div>

          <ReactPlayer
            key={url}
            className={classes.player}
            url={`https://www.twitch.tv/${url}`}
            width="100%"
            height="100%"
            theme="dark"
            playing={ctx.streamsPlaying}
            volume={ctx.streamMuted}
            controls={true}
            onPlay={() => ctx.setStreamsPlaying(true)}
            onPause={() => ctx.setStreamsPlaying(false)}
            onEnded={() => ctx.setStreamsPlaying(false)}

            // CHECK FOR ONPAUSE /////////////
          />
        </div>
      ))}
    </Fragment>
  );
};

export default Stream;
