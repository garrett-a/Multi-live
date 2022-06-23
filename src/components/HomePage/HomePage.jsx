import React, { Fragment } from "react";

import classes from "./HomePage.module.css";

const HomePage = (props) => {
  const scope = encodeURIComponent("user:read:follows");
  const authHref = `https://id.twitch.tv/oauth2/authorize
  ?response_type=token
  &client_id=owb00645opxcsak6j0dwv4w5ue7pcb&redirect_uri=http://localhost:3000&scope=${scope}`;
  console.log(document.location.hash);
  return (
    <Fragment>
      <div className={classes.homepage}>
        <h2>Welcome</h2>
        {/* <button onClick={props.onClick}>Clickme</button> */}
        <button>
          <a href={authHref}>Authorize</a>
        </button>
      </div>
    </Fragment>
  );
};

export default HomePage;
