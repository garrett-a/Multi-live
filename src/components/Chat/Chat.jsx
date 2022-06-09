import React from "react";

import classes from "./Chat.module.css";

const Chat = () => {
  return (
    <div className={classes.chat}>
      <iframe
        title="1"
        id="twitch-chat-embed"
        src="https://www.twitch.tv/embed/xaryu/chat?parent=localhost"
        height="100%"
        width="350"
      ></iframe>
    </div>
  );
};

export default Chat;
