import React, { useState } from "react";

const ThemeContext = React.createContext({
  showStream: false,
  searchedStreams: [],
  searchedToChat: "",
  setSearchedToChat: () => {},
  addStream: () => {},
  playerWrapperClasses: {},
  playerClasses: () => {},
  muteAllHandler: () => {},
  streamMuted: false,
});

export const ThemeContextProvider = (props) => {
  const [showStream, setShowStream] = useState(false);
  const [searchedStreams, setSearchedStreams] = useState([]);
  const [searchedToChat, setSearchedToChat] = useState("");
  const [streamMuted, setStreamMuted] = useState(false);

  const addStream = (value) => {
    setShowStream(true);
    setSearchedStreams([...searchedStreams, value]);
    setSearchedToChat(value);

    if (
      !searchedStreams[searchedStreams.length - 1] &&
      searchedStreams.length > 1
    ) {
      setStreamMuted(true);
    }
  };

  const muteAllHandler = () => {
    setStreamMuted(true);
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
        muteAllHandler: muteAllHandler,
        streamMuted: streamMuted,
        setStreamMuted: setStreamMuted,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
