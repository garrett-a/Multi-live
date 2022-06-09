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

  const addStream = () => {
    setShowStream(true);
  };

  return (
    <Fragment>
      <Header>
        <SettingModal />
      </Header>
      <SideBar />
      {!showStream && <HomePage onClick={addStream} />}
      {showStream && (
        <Container>
          <Chat />
          <Stream />
        </Container>
      )}
    </Fragment>
  );
}

export default App;
