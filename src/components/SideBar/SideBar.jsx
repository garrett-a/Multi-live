import React from "react";

import classes from "./SideBar.module.css";

const SideBar = () => {
  // const fetchFollowers = async () => {
  //   const response = await fetch(
  //     `https://api.twitch.tv/helix/streams/followed?user_id=tv4wo3k1satpgrlzqjrjjx5l4cwxwn`,
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${process.env.REACT_APP_TOKEN} `,
  //         "Client-Id": `owb00645opxcsak6j0dwv4w5ue7pcb`,
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const responseData = await response.json();
  //   const result = responseData.data;

  return <aside className={classes.sidebar}></aside>;
};

export default SideBar;
