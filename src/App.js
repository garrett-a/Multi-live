import { Fragment, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Stream from "./components/Video/Stream";
import Chat from "./components/Chat/Chat";
import Container from "./UI/Container";
import SettingModal from "./components/Header/SettingModal";
import SideBar from "./components/SideBar/SideBar";
import HomePage from "./components/HomePage/HomePage";

function App(props) {
  const [showStream, setShowStream] = useState(false);
  const [streams, setStreams] = useState("");

  console.log(streams.label);

  const addStream = () => {
    setShowStream(true);
  };

  return (
    <Fragment>
      <Header setStreams={setStreams}>
        <SettingModal />
      </Header>
      <SideBar />
      {!showStream && <HomePage onClick={addStream} />}
      {showStream && (
        <Container>
          <Chat />
          <Stream url={streams.label} />
        </Container>
      )}
    </Fragment>
  );
}

export default App;
