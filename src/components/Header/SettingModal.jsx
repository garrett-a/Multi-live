import React, { Fragment, useContext, useEffect, useRef } from "react";

import classes from "./SettingModal.module.css";
import ThemeContext from "../../store/theme-context";

const SettingModal = (props) => {
  const ctx = useContext(ThemeContext);
  const ref = useRef();

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
        <div className={classes.icons}>
          <i className="fa-solid fa-arrows-rotate"></i>
          <span>Rotate Layout</span>
        </div>
      </div>
    </Fragment>
  );
};

export default SettingModal;
