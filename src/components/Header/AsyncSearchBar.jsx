import React, { Fragment, useState } from "react";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";

import classes from "./AsyncSearchBar.module.css";

const AsyncSearchBar = ({ setSearchedStreams, addStream }) => {
  const animatedComponents = makeAnimated();

  const [query, setQuery] = useState("");

  // const renderStreamHandler = () => {
  //   if (query !== "") {
  //     // addStream();
  //   }
  // };

  const resetInput = () => {
    setQuery("");
  };

  const fetchStreams = async () => {
    const response = await fetch(
      `https://api.twitch.tv/helix/search/channels?query=${query}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN} `,
          "Client-Id": `owb00645opxcsak6j0dwv4w5ue7pcb`,
          "Content-Type": "application/json",
        },
      }
    );
    const responseData = await response.json();
    const result = responseData.data.map((item) => {
      return {
        label: item.display_name,
        value: item.id,
        img: (
          <img
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              borderRadius: "50%",
            }}
            alt={item.label}
            src={item.thumbnail_url}
          />
        ),
        live: item.is_live,
      };
    });

    console.log(responseData);
    console.log(result);

    return result;
  };

  const optionLabel = (e) => (
    <div
      style={{
        display: "flex",
        alignContent: "center",
      }}
    >
      <span>{e.img}</span>
      <span
        style={{ marginLeft: "25px", display: "flex", alignItems: "center" }}
      >
        {e.label}
      </span>
      {e.live && (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            backgroundColor: "red",
            padding: "6px",
            borderRadius: "10px",
            fontSize: "11px",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          LIVE
        </span>
      )}
    </div>
  );

  return (
    <Fragment>
      <AsyncSelect
        cacheOptions
        components={animatedComponents}
        placeholder="Search streams"
        className={classes.input}
        getOptionLabel={optionLabel}
        getOptionValue={(e) => e.value}
        loadOptions={fetchStreams}
        onInputChange={(value) => setQuery(value)}
        onChange={(value) => addStream(value.label)}
        escapeClearsValue={true}
        onBlur={resetInput}
        value={query}
      />
    </Fragment>
  );
};

export default AsyncSearchBar;

// getOptionLabel={(e) => e.label}
