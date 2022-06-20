import React, { useContext, useState } from "react";
import AsyncSearchBar from "./AsyncSearchBar";
import ThemeContext from "../../store/theme-context";

import classes from "./Header.module.css";

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const ctx = useContext(ThemeContext);

  const rotateStreams = () => {
    ctx.searchedStreams.push(ctx.searchedStreams.shift());
    console.log(ctx.searchedStreams);
  };

  return (
    <header className={classes.header}>
      <h1>Twitch Player</h1>
      <AsyncSearchBar />
      <i onClick={rotateStreams} class="fa-solid fa-arrows-rotate"></i>
      <i onClick={() => setOpen(!open)} class="fa-solid fa-bars">
        {open && props.children}
      </i>
    </header>
  );
};

export default Header;
