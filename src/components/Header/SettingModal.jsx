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
        <div
          onClick={() => {
            ctx.muteAllHandler();
            props.setOpen(false);
          }}
          className={classes.icon}
        >
          <i class="fa-solid fa-volume-xmark"></i>
          <span>Mute all</span>
        </div>
        <div className={classes.icon}>
          <i class="fa-solid fa-circle-pause"></i>
          <span>Pause all</span>
        </div>
        <div className={classes.icon}>
          <i class="fa-solid fa-arrows-rotate"></i>
          <span>Rotate Layout</span>
        </div>
      </div>
    </Fragment>
  );
};

export default SettingModal;
