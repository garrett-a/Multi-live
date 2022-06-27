import React, { Fragment, useContext } from "react";

import TabBar from "./TabBar";
import ThemeContext from "../../store/theme-context";

import classes from "./Chat.module.css";

const Chat = () => {
  const ctx = useContext(ThemeContext);
  return (
    <Fragment>
      <div className={classes.chat}>
        <TabBar />
        <iframe
          title="1"
          id="twitch-chat-embed"
          src={`https://www.twitch.tv/embed/${ctx.searchedToChat}/chat?darkpopout&parent=www.multi-live.netlify.app`}
          // src={`https://www.twitch.tv/embed/${ctx.searchedToChat}/chat?darkpopout&parent=localhost`}
          height="100%"
          width="350px"
        ></iframe>
      </div>
    </Fragment>
  );
};

export default Chat;
