import * as React from "react";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    const fetchStreams = async () => {
      const response = await fetch("https://api.twitch.tv/helix/streams", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          "Client-Id": `owb00645opxcsak6j0dwv4w5ue7pcb`,
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      console.log(responseData);
      const streamData = [];
      responseData.map().push();
      setStreams(streamData);
    };

    //TODO PUSH STREAM DATA TO SEARCH

    fetchStreams();
  }, []);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={streams.map((option) => option.data.user_name)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search" />}
    />
  );
}
