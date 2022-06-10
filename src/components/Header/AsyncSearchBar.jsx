import React, { Fragment, useState } from "react";
import AsyncSelect from "react-select/async";

const AsyncSearchBar = ({ setStreams }) => {
  const [query, setQuery] = useState("");

  const fetchStreams = async () => {
    const response = await fetch(
      `https://api.twitch.tv/helix/search/channels?query=${query}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          "Client-Id": `owb00645opxcsak6j0dwv4w5ue7pcb`,
          "Content-Type": "application/json",
        },
      }
    );
    const responseData = await response.json();

    console.log(responseData);
  };

  return (
    <Fragment>
      <AsyncSelect
        cacheOptions
        getOptionLabel={(e) => e.user_name}
        getOptionValue={(e) => e.id}
        loadOptions={fetchStreams}
        onInputChange={(value) => setQuery(value)}
        onChange={(value) => setStreams(value)}
      />
    </Fragment>
  );
};

export default AsyncSearchBar;
