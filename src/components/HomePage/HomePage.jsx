import React, { Fragment } from "react";

import classes from "./HomePage.module.css";

const HomePage = (props) => {
  return (
    <Fragment>
      <div className={classes.homepage}>
        <h2>Welcome</h2>
        <button onClick={props.onClick}>Clickme</button>
      </div>
    </Fragment>
  );
};

export default HomePage;
