import React, { useEffect, useState } from "react";

import classes from "./Header.module.css";

const Header = (props) => {
  useEffect(() => {
    const fetchStreams = async () => {
      const response = await fetch("https://api.twitch.tv/helix/streams", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          "Client-Id": `owb00645opxcsak6j0dwv4w5ue7pcb`,
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      console.log(responseData);
    };

    fetchStreams();
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <header className={classes.header}>
      <h1>Twitch Player</h1>
      <input type="search"></input>

      <div>User</div>
      <i onClick={() => setOpen(!open)} class="fa-solid fa-bars">
        {open && props.children}
      </i>
    </header>
  );
};

export default Header;
