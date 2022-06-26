import React, { useState, useRef } from "react";

const ThemeContext = React.createContext({
  showStream: false,
  setShowStream: () => {},
  searchedStreams: [],
  searchedToChat: "",
  setSearchedToChat: () => {},
  addStream: () => {},
  playerWrapperClasses: {},
  playerClasses: () => {},
  muteAllHandler: () => {},
  streamMuted: 0.5,
  streamsPlaying: true,
  setStreamsPlaying: () => {},
  pauseAllHandler: () => {},
  streamWrapperRef: null,
});

export const ThemeContextProvider = (props) => {
  const [showStream, setShowStream] = useState(false);
  const [searchedStreams, setSearchedStreams] = useState([]);
  const [searchedToChat, setSearchedToChat] = useState("");
  const [streamMuted, setStreamMuted] = useState(0.5);
  const [streamsPlaying, setStreamsPlaying] = useState(true);

  const streamWrapperRef = useRef(null);

  console.log(streamsPlaying);
  console.log(searchedToChat);

  const addStream = (value) => {
    if (searchedStreams.length <= 3) {
      setShowStream(true);
      setSearchedStreams([...searchedStreams, value]);
      setSearchedToChat(value);
    } else {
      return alert("Only 4 streams supported");
    }
    console.log(searchedStreams.length);
  };

  const muteAllHandler = () => {
    if (streamMuted > 0) {
      setStreamMuted(0);
    } else {
      setStreamMuted(0.5);
    }
  };

  const pauseAllHandler = () => {
    setStreamsPlaying(!streamsPlaying);
    console.log(streamsPlaying);
  };

  return (
    <ThemeContext.Provider
      value={{
        searchedStreams: searchedStreams,
        setSearchedStreams: setSearchedStreams,
        showStream: showStream,
        setShowStream: setShowStream,
        searchedToChat: searchedToChat,
        setSearchedToChat: setSearchedToChat,
        addStream: addStream,
        muteAllHandler: muteAllHandler,
        streamMuted: streamMuted,
        setStreamMuted: setStreamMuted,
        streamsPlaying: true,
        setStreamsPlaying: setStreamsPlaying,
        pauseAllHandler: pauseAllHandler,
        streamWrapperRef: streamWrapperRef,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
