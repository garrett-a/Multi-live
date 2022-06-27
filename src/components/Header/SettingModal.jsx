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

  // ROTATE STREAMS
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
  };

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
        {/* {ctx.streamsPlaying && (
          <div
            onClick={() => {
              ctx.setStreamsPlaying(false);
              props.setOpen(false);
            }}
            className={classes.icons}
          >
            <i className="fa-solid fa-circle-pause"></i>
            <span>Pause all</span>
          </div>
        )}
        {ctx.streamsPlaying && (
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
        )} */}
        {ctx.searchedStreams.length > 1 && (
          <div onClick={rotateStreamHandler} className={classes.icons}>
            <i className="fa-solid fa-arrows-rotate"></i>
            <span>Rotate Layout</span>
          </div>
        )}
        {/* <div className={classes.icons}>
          <i className="fa-solid fa-comment-slash"></i>
          <span>Hide chat</span>
        </div> */}
      </div>
    </Fragment>
  );
};

export default SettingModal;
