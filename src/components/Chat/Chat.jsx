import React, { Fragment, useContext } from "react";

import TabBar from "./TabBar";
import StoreContext from "../../store/store-context";

import classes from "./Chat.module.css";

const Chat = () => {
  const ctx = useContext(StoreContext);
  return (
    <Fragment>
      <div className={classes.chat}>
        <TabBar />
        <iframe
          title="1"
          id="twitch-chat-embed"
          src={`https://www.twitch.tv/embed/${ctx.searchedToChat}/chat?darkpopout&parent=multi-live.netlify.app`}
          // src={`https://www.twitch.tv/embed/${ctx.searchedToChat}/chat?darkpopout&parent=localhost`}
          height="100%"
          width="350px"
        ></iframe>
      </div>
    </Fragment>
  );
};

export default Chat;
