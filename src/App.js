import { Fragment, useContext } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Stream from "./components/Video/Stream";
import Chat from "./components/Chat/Chat";
import Container from "./UI/Container";
import SettingModal from "./components/Header/SettingModal";
import SideBar from "./components/SideBar/SideBar";
import HomePage from "./components/HomePage/HomePage";
import ThemeContext from "./store/theme-context";

function App() {
  const ctx = useContext(ThemeContext);

  console.log(ctx.searchedStreams);
  console.log(ctx.searchedStreams.length);

  return (
    <Fragment>
      <Header>{<SettingModal />}</Header>
      <SideBar />
      {!ctx.showStream && <HomePage onClick={ctx.addStream} />}
      {ctx.showStream && (
        <Container>
          <Chat url={ctx.searchedToChat} />
          <Stream />
        </Container>
      )}
    </Fragment>
  );
}

export default App;
