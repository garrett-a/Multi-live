import React, { Fragment } from "react";

import classes from "./HomePage.module.css";

const HomePage = (props) => {
  const scope = encodeURIComponent("user:read:follows");
  const authHref = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=owb00645opxcsak6j0dwv4w5ue7pcb&redirect_uri=https://multi-live.netlify.app/&scope=${scope}`;

  if (document.location.hash && document.location.hash !== "") {
    const parsedHash = window.location.hash
      .substring(1)
      .replace("access_token=", "")
      .split("&", [1]);

    console.log(parsedHash);
  }

  return (
    <Fragment>
      <div className={classes.homepage}>
        <h2>Welcome to Multi-live.</h2>
        <h3>Search a twitch stream.</h3>
        <h3>View up to four at once.</h3>
        <button>
          <a onClick={console.log(document.location.hash)} href={authHref}>
            Authorize
          </a>
        </button>
      </div>
    </Fragment>
  );
};

export default HomePage;
