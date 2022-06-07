import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Twitch Player</h1>
      <input type="search"></input>
      <div>User</div>
      <button></button>
    </header>
  );
};

export default Header;
