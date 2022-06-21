import React, { Fragment, useContext, useState } from "react";
import ThemeContext from "../../store/theme-context";

import ReactPlayer from "react-player";

import classes from "./Stream.module.css";

const Stream = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const ctx = useContext(ThemeContext);

  const handleMouseOver = (label) => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const deleteStream = (label) => {
    const newStreams = ctx.searchedStreams.filter((stream) => stream !== label);
    ctx.setSearchedStreams(newStreams);
    console.log(ctx.searchedStreams);
  };

  const wrapperStyles = `${
    ctx.searchedStreams.length === 3
      ? `${classes.playerOne3Streams}`
      : `${classes.wrapper}`
  }`;

  return (
    <Fragment>
      {ctx.searchedStreams.map((label) => (
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className={wrapperStyles}
          key={label}
        >
          {isHovering && (
            <div className={classes.overlay}>
              <i onClick={deleteStream} class="fa-solid fa-xmark"></i>
            </div>
          )}
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
