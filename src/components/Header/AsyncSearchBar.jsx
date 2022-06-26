import React, { Fragment, useState, useContext } from "react";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import ThemeContext from "../../store/theme-context";

import classes from "./AsyncSearchBar.module.css";

const AsyncSearchBar = () => {
  const ctx = useContext(ThemeContext);
  const animatedComponents = makeAnimated();

  const [query, setQuery] = useState("");

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

    return result;
  };

  const optionLabel = (e) => (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
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
            height: "2rem",
            width: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "auto",
            backgroundColor: "red",
            padding: "6px",
            borderRadius: "6px",
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

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#3a3a3a" : "#1a1a1a",
      color: "#fff",
      borderBottom: "1px solid #2d2d2d",
      borderRadius: "8px",
      ":hover": {
        backgroundColor: "#3a3a3a",
      },
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: "#1a1a1a",
      color: "#fff",
      borderBottom: "1px solid #2d2d2d",
      borderRadius: "8px",
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#353535",
      borderRadius: "8px",
      ":active": {
        backgroundColor: "#3a3a3a",
      },
      boxShadow: state.isFocused ? "0 0 0 2px #4b05c4" : "0 0 0 2px #3d03a1",
      border: "none",
    }),
    menuList: (provided) => ({
      ...provided,
      backgroundColor: "#1a1a1a",
      border: "1px solid #5c5c5c",
      borderRadius: "8px",

      "::-webkit-scrollbar": {
        width: "12px",
        borderRadius: "8px",
      },
      "::-webkit-scrollbar-track": {
        background: "#434343",
        borderRadius: "8px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#4b05c4",
        borderRadius: "8px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#5b14d4",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#fff",
    }),
    input: (provided) => ({
      ...provided,
      color: "#ffffff",
    }),
  };

  return (
    <Fragment>
      <AsyncSelect
        cacheOptions
        components={animatedComponents}
        placeholder="Search streams"
        className={classes.searchBar}
        getOptionLabel={optionLabel}
        getOptionValue={(e) => e.value}
        loadOptions={fetchStreams}
        onInputChange={(value) => setQuery(value)}
        onChange={(value) => ctx.addStream(value.label)}
        escapeClearsValue={true}
        onBlur={resetInput}
        value={query}
        styles={customStyles}
      />
    </Fragment>
  );
};

export default AsyncSearchBar;
