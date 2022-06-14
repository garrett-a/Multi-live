import { Fragment, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Stream from "./components/Video/Stream";
import Chat from "./components/Chat/Chat";
import Container from "./UI/Container";
import SettingModal from "./components/Header/SettingModal";
import SideBar from "./components/SideBar/SideBar";
import HomePage from "./components/HomePage/HomePage";

const streamList = [
  {
    url: "http://twitter.com",
  },
  {
    url: "http://twitch.com",
  },
];

function App() {
  const [showStream, setShowStream] = useState(false);
  const [searchedStreams, setSearchedStreams] = useState("");
  const [addStreamButton, setAddStreamButton] = useState(0);

  console.log(addStreamButton);

  console.log(searchedStreams);

  const addStream = () => {
    setShowStream(true);
  };

  const clickAddStreamButton = () => {
    setAddStreamButton(addStreamButton + 1);
    searchedStreams("");
  };

  return (
    <Fragment>
      <Header
        setStreams={setSearchedStreams}
        addStream={addStream}
        clickAddStreamButton={clickAddStreamButton}
      >
        <SettingModal />
      </Header>
      <SideBar />
      {!showStream && <HomePage onClick={addStream} />}
      {showStream && (
        <Container>
          <Chat url={searchedStreams.label} />
          <Stream url={searchedStreams.label} addedStream={addStreamButton} />
        </Container>
      )}
    </Fragment>
  );
}

export default App;

// {streamList.map((stream) => (
//   <Stream url={stream.url} />
// ))}
