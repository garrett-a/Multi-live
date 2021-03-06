import React, { Fragment, useContext, useEffect, useState } from "react";
import StoreContext from "../../store/store-context";

import classes from "./SideBar.module.css";

const SideBar = () => {
  const [userFollows, setUserFollow] = useState([]);
  const ctx = useContext(StoreContext);
  const parsedHash = window.location.hash
    .substring(1)
    .replace("access_token=", "")
    .split("&", [1]);

  useEffect(() => {
    if (ctx.isLoading) {
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
                src={item.profile_image_url}
              />
            ),
          };
        });

        ctx.setUserInfo(resultId);
        console.log(ctx.userInfo);

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
        const result = responseData.data.map((item) => {
          return {
            label: item.user_name,
            id: item.id,
            img: (
              <img
                style={{
                  width: "35px",
                  borderRadius: "50%",
                }}
                alt={item.label}
                src={item.thumbnail_url.replace("{width}x{height}", "300x300")}
              />
            ),
            game: item.game_name,
            views: item.viewer_count,
            title: item.title,
          };
        });
        setUserFollow(result);
        ctx.setIsLoading(false);
      };
      fetchFollowers();
    }
    console.log(ctx.isLoading);
  }, [ctx, parsedHash]);

  const addFollowedStream = (label) => {
    ctx.addStream(label);
  };

  return (
    <Fragment>
      {userFollows.length > 0 && (
        <aside className={classes.sidebar}>
          <ul className={classes.ul}>
            {userFollows.map((stream) => (
              <li
                className={classes.li}
                onClick={() => {
                  addFollowedStream(stream.label);
                }}
              >
                <span className={classes.img}>{stream.img}</span>
                <div>
                  <span className={classes.label}>{stream.label}</span>
                  <span className={classes.game}>{stream.game}</span>
                </div>
                <span className={classes.circle}></span>
                <span className={classes.views}>{stream.views}</span>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </Fragment>
  );
};

export default SideBar;
