import { Fragment, useContext } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Stream from "./components/Video/Stream";
import Chat from "./components/Chat/Chat";
import Container from "./UI/Container";
import SideBar from "./components/SideBar/SideBar";
import HomePage from "./components/HomePage/HomePage";
import StoreContext from "./store/store-context";

function App() {
  const ctx = useContext(StoreContext);

  return (
    <Fragment>
      <Header />
      <SideBar />
      {!ctx.showStream && <HomePage />}
      {ctx.showStream && (
        <Container>
          <Stream />
          <Chat />
        </Container>
      )}
    </Fragment>
  );
}

export default App;
