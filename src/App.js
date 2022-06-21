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

  return (
    <Fragment>
      <Header>{<SettingModal />}</Header>
      <SideBar />
      {!ctx.showStream && <HomePage onClick={ctx.addStream} />}
      {ctx.showStream && (
        <Container>
          <Stream />
          <Chat url={ctx.searchedToChat} />
        </Container>
      )}
    </Fragment>
  );
}

export default App;
