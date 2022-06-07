import { Fragment } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Stream from "./components/Video/Stream";
import Chat from "./components/Chat/Chat";
import Container from "./UI/Container";

function App() {
  return (
    <Fragment>
      <Header />
      <Container>
        <Chat />
        <Stream />
      </Container>
    </Fragment>
  );
}

export default App;
