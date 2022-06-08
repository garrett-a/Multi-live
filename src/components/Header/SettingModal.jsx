import React, { Fragment } from "react";

import classes from "./SettingModal.module.css";

const SettingModal = () => {
  return (
    <Fragment>
      <div className={classes.modal}>
        <p>Settings</p>
        <div className={classes.icon}>
          <i class="fa-solid fa-volume-xmark"></i>
        </div>
        <div className={classes.icon}>
          <i class="fa-solid fa-arrows-rotate"></i>
        </div>
        <div className={classes.icon}>
          <i class="fa-solid fa-circle-pause"></i>
        </div>
      </div>
    </Fragment>
  );
};

export default SettingModal;
