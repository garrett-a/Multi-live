import React, { useEffect } from "react";

import classes from "./SideBar.module.css";

const SideBar = () => {
  const parsedHash = window.location.hash
    .substring(1)
    .replace("access_token=", "")
    .split("&", [1]);

  console.log(parsedHash[0]);

  useEffect(() => {
    // fetchUserId();
    fetchFollowers();
  }, []);

  // const fetchUserId = async () => {
  //   const response = await fetch(`GET https://api.twitch.tv/helix/users`, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${parsedHash} `,
  //       "Client-Id": `owb00645opxcsak6j0dwv4w5ue7pcb`,
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const responseData = await response.json();
  //   const result = responseData.data;
  //   console.log(result);
  // };
  const fetchFollowers = async () => {
    const responseId = await fetch(`https://api.twitch.tv/helix/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${parsedHash} `,
        "Client-Id": `owb00645opxcsak6j0dwv4w5ue7pcb`,
        "Content-Type": "application/json",
      },
    });
    const responseDataId = await responseId.json();
    const resultId = responseDataId.data.map((item) => {
      return {
        label: item.display_name,
        id: item.id,
        img: item.profile_image_url,
      };
    });
    console.log(resultId);

    const response = await fetch(
      `https://api.twitch.tv/helix/streams/followed?user_id=${resultId[0].id}`,
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
