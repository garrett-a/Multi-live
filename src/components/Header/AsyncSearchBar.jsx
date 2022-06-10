import React, { Fragment, useState } from "react";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";

import classes from "./AsyncSearchBar.module.css";

const AsyncSearchBar = ({ setStreams }) => {
  const animatedComponents = makeAnimated();

  const [query, setQuery] = useState("");

  const fetchStreams = async () => {
    const response = await fetch(
      `https://api.twitch.tv/helix/search/channels?query=${query}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer qe853taskz394q7tly71ncbfzss47x `,
          "Client-Id": `owb00645opxcsak6j0dwv4w5ue7pcb`,
          "Content-Type": "application/json",
        },
      }
    );
    const responseData = await response.json();
    const result = responseData.data.map((item) => {
      return { label: item.display_name, value: item.id };
    });

    console.log(result);
    console.log(result.label);
    console.log(result[0].value);
    return result;
  };

  return (
    <Fragment>
      <AsyncSelect
        cacheOptions
        components={animatedComponents}
        placeholder="Search streams"
        className={classes.input}
        getOptionLabel={(e) => e.label}
        getOptionValue={(e) => e.value}
        loadOptions={fetchStreams}
        onInputChange={(value) => setQuery(value)}
        onChange={(value) => setStreams(value)}
      />
    </Fragment>
  );
};

export default AsyncSearchBar;
