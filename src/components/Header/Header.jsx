import React, { useState } from "react";
import AsyncSearchBar from "./AsyncSearchBar";

import classes from "./Header.module.css";
import SettingModal from "./SettingModal";

const Header = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <header className={classes.header}>
      <h1>Twitch Player</h1>
      <AsyncSearchBar className={classes.searchBar} />
      {!open && (
        <div className={classes.icon}>
          <i onClick={() => setOpen(!open)} className="fa-solid fa-bars"></i>
        </div>
      )}
      {open && (
        <div className={classes.icon}>
          <i onClick={() => setOpen(open)} className="fa-solid fa-xmark"></i>
        </div>
      )}

      {open && <SettingModal setOpen={setOpen} open={open} />}
    </header>
  );
};

export default Header;
