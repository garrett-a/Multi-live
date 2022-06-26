import React, { useContext, useState } from "react";
import AsyncSearchBar from "./AsyncSearchBar";

import classes from "./Header.module.css";
import SettingModal from "./SettingModal";
import ThemeContext from "../../store/theme-context";

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const ctx = useContext(ThemeContext);

  return (
    <header className={classes.header}>
      <img src={require("../../assets/logo-small.png")} alt="logo" />
      <h1>ulti-Live</h1>
      <AsyncSearchBar className={classes.searchBar} />
      {!open && (
        <div
          style={{ opacity: ctx.showStream ? 1 : 0 }}
          className={classes.icon}
        >
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
