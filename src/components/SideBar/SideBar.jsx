import React, { Fragment, useEffect, useState } from "react";

import classes from "./SideBar.module.css";

const SideBar = () => {
  const [userFollows, setUserFollow] = useState([]);
  console.log(userFollows);
  const parsedHash = window.location.hash
    .substring(1)
    .replace("access_token=", "")
    .split("&", [1]);

  useEffect(() => {
    fetchFollowers();
  }, []);

  const fetchFollowers = async () => {
    // GET USER ID
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

    // GET USERS FOR PROFILE PIC
    const responseUsers = await fetch(
      `https://api.twitch.tv/helix/users?id=${resultId[0].id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${parsedHash} `,
          "Client-Id": `owb00645opxcsak6j0dwv4w5ue7pcb`,
          "Content-Type": "application/json",
        },
      }
    );
    const responseDataUsers = await responseUsers.json();
    const resultUsers = responseDataUsers.data.map((item) => {
      return {
        img: item.profile_image_url,
      };
    });
    console.log(resultUsers.img);

    // GET USER FOLLOWED STREAMS
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
    console.log(responseData.data);
    const result = responseData.data.map((item) => {
      return {
        label: item.user_name,
        id: item.id,
        img: (
          <img
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              borderRadius: "50%",
            }}
            alt={item.label}
            src={resultUsers.img}
            // src={item.thumbnail_url.replace("{width}x{height}", "300x300")}
          />
        ),
        game: item.game_name,
        views: item.viewer_count,
        title: item.title,
      };
    });
    console.log(result.img);
    console.log(result);
    setUserFollow(result);
  };

  return (
    <Fragment>
      <aside className={classes.sidebar}>
        {userFollows.map((stream) => (
          <ul>
            <li id={stream.id}>
              <span>{stream.img}</span>
              <span>{stream.label}</span>
              <span>{stream.game}</span>
              <span>{stream.views}</span>
            </li>
          </ul>
        ))}
      </aside>
    </Fragment>
  );
};

export default SideBar;
