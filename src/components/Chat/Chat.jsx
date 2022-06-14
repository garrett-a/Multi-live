import React from "react";

import classes from "./Chat.module.css";

const Chat = (props) => {
  return (
    <div className={classes.chat}>
      <iframe
        title="1"
        id="twitch-chat-embed"
        src={`https://www.twitch.tv/embed/${props.url}/chat?parent=localhost`}
        height="100%"
      ></iframe>
    </div>
  );
};

export default Chat;
