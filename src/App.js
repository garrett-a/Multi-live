import { Fragment } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Stream from "./components/Video/Stream";
import Chat from "./components/Chat/Chat";
import Container from "./UI/Container";
import SettingModal from "./components/Header/SettingModal";

function App() {
  return (
    <Fragment>
      <Header>
        <SettingModal />
      </Header>
      <Container>
        <Chat />
        <Stream />
      </Container>
    </Fragment>
  );
}

export default App;
