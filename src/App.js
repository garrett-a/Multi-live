import { Fragment, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Stream from "./components/Video/Stream";
import Chat from "./components/Chat/Chat";
import Container from "./UI/Container";
import SettingModal from "./components/Header/SettingModal";
import SideBar from "./components/SideBar/SideBar";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const [showStream, setShowStream] = useState(false);
  const [searchedStreams, setSearchedStreams] = useState([]);

  console.log(searchedStreams);

  const addStream = (value) => {
    setShowStream(true);
    setSearchedStreams([...searchedStreams, value]);
  };

  return (
    <Fragment>
      <Header setStreams={setSearchedStreams} addStream={addStream}>
        <SettingModal />
      </Header>
      <SideBar />
      {!showStream && <HomePage onClick={addStream} />}
      {showStream && (
        <Container>
          <Chat url={searchedStreams} />
          <Stream searchedStreams={searchedStreams} />
        </Container>
      )}
    </Fragment>
  );
}

export default App;

// {streamList.map((stream) => (
//   <Stream url={stream.url} />
// ))}

// const streamList = [
//   {
//     url: "http://twitter.com",
//   },
//   {
//     url: "http://twitch.com",
//   },
// ];
