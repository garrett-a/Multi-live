import React, { useContext } from "react";
import ThemeContext from "../store/theme-context";

import classes from "./Container.module.css";

const Container = (props) => {
  const ctx = useContext(ThemeContext);
  const streamWrapperRef = ctx.streamWrapperRef;

  const stylesContainer = `${
    ctx.searchedStreams.length === 1 ? `${classes.container1}` : ""
  } ${ctx.searchedStreams.length === 2 ? `${classes.container2}` : ""}${
    ctx.searchedStreams.length === 3 ? `${classes.container3p1}` : ""
  }${ctx.searchedStreams.length === 4 ? `${classes.container4}` : ""}`;

  return (
    <div ref={streamWrapperRef} className={stylesContainer}>
      {props.children}
    </div>
  );
};

export default Container;
