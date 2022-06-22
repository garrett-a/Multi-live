import * as React from "react";
import { useContext } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ThemeContext from "../../store/theme-context";

export default function ScrollableTabsButtonForce() {
  const ctx = useContext(ThemeContext);
  const [value, setValue] = React.useState(ctx.searchedToChat);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 350, sm: 350 }, bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {ctx.searchedStreams.map((url) => (
          <Tab label={url} />
        ))}
        {/* <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" /> */}
      </Tabs>
    </Box>
  );
}
