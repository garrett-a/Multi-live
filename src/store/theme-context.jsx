import React, { useState } from "react";

const ThemeContext = React.createContext({
  showStream: false,
  searchedStreams: [],
  searchedToChat: "",
  setSearchedToChat: () => {},
  addStream: () => {},
  playerWrapperClasses: {},
  playerClasses: () => {},
  wrapperRef: null,
});

export const ThemeContextProvider = (props) => {
  const [showStream, setShowStream] = useState(false);
  const [searchedStreams, setSearchedStreams] = useState([]);
  const [searchedToChat, setSearchedToChat] = useState("");

  const addStream = (value) => {
    setShowStream(true);
    setSearchedStreams([...searchedStreams, value]);
    setSearchedToChat(value);
  };

  return (
    <ThemeContext.Provider
      value={{
        searchedStreams: searchedStreams,
        setSearchedStreams: setSearchedStreams,
        showStream: showStream,
        searchedToChat: searchedToChat,
        setSearchedToChat: setSearchedToChat,
        addStream: addStream,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
