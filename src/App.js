import { Fragment } from "react";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

import Card from "./Card";
import "./App.css";
import ReactPlayer from "react-player";

function App() {
  return (
    <Fragment>
      <div className="grid">
        {/* <ReactTwitchEmbedVideo
          channel="ziqoftw"
          width="100%"
          targetId="first"
          layout="video"
        /> */}

        <div className="wrapper">
          <ReactPlayer
            height="100%"
            width="100%"
            url="https://www.twitch.tv/ziqoftw"
          />
        </div>
        <div className="wrapper">
          <ReactPlayer url="https://www.twitch.tv/ziqoftw" />
        </div>

        <div className="chat">
          <iframe
            title="1"
            id="twitch-chat-embed"
            src="https://www.twitch.tv/embed/ziqoftw/chat?parent=localhost"
            height="100%"
            width="350"
          ></iframe>
        </div>

        {/* <Card className="cards">
          <ReactTwitchEmbedVideo
            channel="richwcampbell"
            width="100%"
            targetId="second"
            layout="video"
          />
        </Card> */}
      </div>
    </Fragment>
  );
}

export default App;
