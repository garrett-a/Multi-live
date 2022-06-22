import React, { Fragment, useContext } from "react";
import ThemeContext from "../../store/theme-context";

import ReactPlayer from "react-player";

import classes from "./Stream.module.css";

const Stream = () => {
  // const [isHovering, setIsHovering] = useState("");
  const ctx = useContext(ThemeContext);

  // const handleMouseOver = (url) => {
  //   setIsHovering(url);

  //   console.log(url);
  // };

  // const handleMouseOut = () => {
  //   setIsHovering(false);
  // };

  const deleteStream = (url) => {
    const newStreams = ctx.searchedStreams.filter((stream) => stream !== url);
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
      {ctx.searchedStreams.map((url) => (
        <div
          // onMouseOver={() => {
          //   handleMouseOver(url);
          // }}
          // onMouseOut={handleMouseOut}
          className={wrapperStyles}
          key={url}
          id={url}
        >
          <div className={classes.overlay}>
            <i
              onClick={() => {
                deleteStream(url);
              }}
              class="fa-solid fa-xmark"
            ></i>
          </div>

          <ReactPlayer
            key={url}
            className={classes.player}
            url={`https://www.twitch.tv/${url}`}
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
