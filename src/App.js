import { Fragment } from "react";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

import Card from "./Card";
import "./App.css";
import Header from "./components/Header/Header";
import Stream from "./components/Video/Stream";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <Fragment>
      <Header />
      <Chat />
      <div className="grid">
        <Stream />
      </div>
    </Fragment>
  );
}

export default App;
