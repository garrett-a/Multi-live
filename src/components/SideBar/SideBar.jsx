import React, { useEffect } from "react";

import classes from "./SideBar.module.css";

const SideBar = () => {
  const parsedHash = window.location.hash
    .substring(1)
    .replace("access_token=", "")
    .split("&", [1]);

  console.log(parsedHash[0]);

  useEffect(() => {
    fetchFollowers();
  }, []);

  const fetchFollowers = async () => {
    const response = await fetch(
      `https://api.twitch.tv/helix/streams/followed`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${parsedHash} `,
          "Client-Id": `owb00645opxcsak6j0dwv4w5ue7pcb`,
          "Content-Type": "application/json",
        },
      }
    );
    const responseData = await response.json();
    const result = responseData.data;
    console.log(result);
  };

  return <aside className={classes.sidebar}></aside>;
};

export default SideBar;

// curl -X GET 'https://api.twitch.tv/helix/streams/followed?user_id=141981764' \
// -H 'Authorization: Bearer 2gbdx6oar67tqtcmt49t3wpcgycthx' \
// -H 'Client-Id: wbmytr93xzw8zbg0p1izqyzzc5mbiz'
