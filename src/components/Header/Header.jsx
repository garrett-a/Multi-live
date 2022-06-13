import React, { useState } from "react";
import AsyncSearchBar from "./AsyncSearchBar";

import classes from "./Header.module.css";

const Header = (props) => {
  const [open, setOpen] = useState(false);
  // const [streams, setStreams] = useState("");

  return (
    <header className={classes.header}>
      <h1>Twitch Player</h1>
      <AsyncSearchBar
        setStreams={props.setStreams}
        addStream={props.addStream}
      />
      <div>User</div>
      <i onClick={() => setOpen(!open)} class="fa-solid fa-bars">
        {open && props.children}
      </i>
    </header>
  );
};

export default Header;
