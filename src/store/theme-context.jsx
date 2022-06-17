import React, { useState, useRef } from "react";
import classes from "./theme-context.module.css";

const ThemeContext = React.createContext({
  showStream: false,
  searchedStreams: [],
  searchedToChat: "",
  addStream: () => {},
  playerWrapperClasses: {},
  playerClasses: () => {},
  wrapperRef: null,
});

export const ThemeContextProvider = (props) => {
  const wrapperRef = useRef(null);

  const [showStream, setShowStream] = useState(false);
  const [searchedStreams, setSearchedStreams] = useState([]);
  const [searchedToChat, setSearchedToChat] = useState("");

  const addStream = (value) => {
    setShowStream(true);
    setSearchedStreams([...searchedStreams, value]);
    setSearchedToChat(value);
    playerWrapperClasses();
    playerClasses();
  };

  const playerWrapperClasses = () => {
    if (searchedStreams.length === 1) {
      const wrapper = wrapperRef.current;
      wrapper.className = `${classes.wrapperOneStream}`;
    }

    if (searchedStreams.length === 2) {
      return `${classes.wrapperTwoStreams}`;
    }
  };

  const playerClasses = () => {
    if (searchedStreams.length === 1) {
      return `${classes.player1}`;
    }
    if (searchedStreams.length === 2) {
      return `${classes.player2}`;
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        searchedStreams: searchedStreams,
        showStream: showStream,
        searchedToChat: searchedToChat,
        addStream: addStream,
        playerWrapperClasses: playerWrapperClasses,
        playerClasses: playerClasses,
        wrapperRef: wrapperRef,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
