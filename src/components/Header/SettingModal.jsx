import React, { Fragment, useContext, useEffect, useRef } from "react";

import classes from "./SettingModal.module.css";
import styles from "../../UI/Container.module.css";
import ThemeContext from "../../store/theme-context";

const SettingModal = (props) => {
  const ctx = useContext(ThemeContext);
  const ref = useRef();
  const streamWrapperRef = ctx.streamWrapperRef.current;

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (props.open && ref.current && !ref.current.contains(e.target)) {
        props.setOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  });

  // const rotateStreamsHandler = () => {
  //   `${ctx.searchedStreams.length === 1 ? `${classes.container1}` : ""} ${
  //     ctx.searchedStreams.length === 2 ? `${classes.container2}` : ""
  //   }${ctx.searchedStreams.length === 3 ? `${classes.container3}` : ""}${
  //     ctx.searchedStreams.length === 4 ? `${classes.container4}` : ""
  //   }`;
  // };

  const rotateStreamHandler = () => {
    // TWO STREAMS
    streamWrapperRef.classList.replace(
      `${styles.container2p1}`,
      `${styles.container2p2}`
    ) ||
      streamWrapperRef.classList.replace(
        `${styles.container2p2}`,
        `${styles.container2p1}`
      );

    // THREE STREAMS
    streamWrapperRef.classList.replace(
      `${styles.container3p1}`,
      `${styles.container3p2}`
    ) ||
      streamWrapperRef.classList.replace(
        `${styles.container3p2}`,
        `${styles.container3p3}`
      ) ||
      streamWrapperRef.classList.replace(
        `${styles.container3p3}`,
        `${styles.container3p1}`
      );

    // FOUR STREAMS
    streamWrapperRef.classList.replace(
      `${styles.container4p1}`,
      `${styles.container4p2}`
    ) ||
      streamWrapperRef.classList.replace(
        `${styles.container4p2}`,
        `${styles.container4p3}`
      ) ||
      streamWrapperRef.classList.replace(
        `${styles.container4p3}`,
        `${styles.container4p4}`
      ) ||
      streamWrapperRef.classList.replace(
        `${styles.container4p4}`,
        `${styles.container4p1}`
      );

    console.log(streamWrapperRef);
  };
  // const refFunc = () => {
  //   // streamWrapperRef.current.classList.toggle(`${styles.wrapperTwoStreams}`);
  //   if (streamWrapperRef.classList.contains(`${styles.container3p1}`)) {
  //     streamWrapperRef.classList.remove(`${styles.container3p1}`);
  //     streamWrapperRef.classList.add(`${styles.container3p2}`);
  //   } else if (streamWrapperRef.classList.contains(`${styles.container3p2}`)) {
  //     streamWrapperRef.classList.remove(`${styles.container3p2}`);
  //     streamWrapperRef.classList.add(`${styles.container3p3}`);
  //   } else {
  //     streamWrapperRef.classList.remove(`${styles.container3p3}`);
  //     streamWrapperRef.classList.add(`${styles.container3p1}`);
  //   }

  //   console.log(streamWrapperRef);
  // };

  //   el.classList.replace("state-1", "state-2") ||
  //  el.classList.replace("state-2", "state-3") ||
  //  el.classList.replace("state-3", "state-1");

  // element.classList.forEach(className => {
  //   console.log(className)
  // })

  // ${styles.playerOne3StreamsToggle}

  return (
    <Fragment>
      <div ref={ref} className={classes.modal}>
        <p>Settings</p>
        {ctx.streamMuted >= 0.5 && (
          <div
            onClick={() => {
              ctx.muteAllHandler();
              props.setOpen(false);
            }}
            className={classes.icons}
          >
            <i className="fa-solid fa-volume-xmark"></i>
            <span>Mute all</span>
          </div>
        )}
        {ctx.streamMuted === 0 && (
          <div
            onClick={() => {
              ctx.muteAllHandler();
              props.setOpen(false);
            }}
            className={classes.icons}
          >
            <i className="fa-solid fa-volume-high"></i>
            <span>Unmute all</span>
          </div>
        )}
        {ctx.streamsPlaying && (
          <div
            onClick={() => {
              ctx.pauseAllHandler();
              props.setOpen(false);
            }}
            className={classes.icons}
          >
            <i className="fa-solid fa-circle-pause"></i>
            <span>Pause all</span>
          </div>
        )}
        {!ctx.streamsPlaying && (
          <div
            onClick={() => {
              ctx.setStreamsPlaying(true);
              props.setOpen(false);
            }}
            className={classes.icons}
          >
            <i className="fa-solid fa-circle-play"></i>
            <span>Play all</span>
          </div>
        )}
        <div onClick={rotateStreamHandler} className={classes.icons}>
          <i className="fa-solid fa-arrows-rotate"></i>
          <span>Rotate Layout</span>
        </div>
      </div>
    </Fragment>
  );
};

export default SettingModal;
