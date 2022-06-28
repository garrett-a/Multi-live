import React, { Fragment, useEffect, useState } from "react";

import classes from "./SideBar.module.css";

const SideBar = () => {
  const [userFollows, setUserFollow] = useState([]);
  const parsedHash = window.location.hash
    .substring(1)
    .replace("access_token=", "")
    .split("&", [1]);

  useEffect(() => {
    fetchFollowers();
  }, []);

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
    const result = responseData.data.map((item) => {
      return {
        label: item.user_name,
        id: item.id,
        img: item.thumbnail_url,
        game: item.game_name,
        views: item.viewer_count,
      };
    });
    console.log(result);
    setUserFollow(result);
  };

  return (
    <Fragment>
      <aside className={classes.sidebar}>
        {userFollows.map((label, id, img, game, views) => (
          <ul>
            <li id={id}>
              <img alt={label} src={img} />
              <span>{game}</span>
              <span>{views}</span>
            </li>
          </ul>
        ))}
      </aside>
    </Fragment>
  );
};

export default SideBar;
