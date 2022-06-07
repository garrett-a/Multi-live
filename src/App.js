import { Fragment } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Stream from "./components/Video/Stream";
import Chat from "./components/Chat/Chat";
import Container from "./UI/Container";

import classes from "./UI/Container.module.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Container>
        <Chat className={classes.chatContainer} />
        <Stream className=".player1" />
      </Container>
    </Fragment>
  );
}

export default App;
