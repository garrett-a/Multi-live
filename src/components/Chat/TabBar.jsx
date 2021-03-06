import * as React from "react";
import { useContext, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import StoreContext from "../../store/store-context";

export default function ScrollableTabsButtonForce() {
  const ctx = useContext(StoreContext);
  const [value, setValue] = useState(ctx.searchedToChat);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    ctx.setSearchedToChat(newValue);
    console.log(newValue);
  };

  console.log(value);
  console.log(...ctx.searchedStreams);
  console.log(ctx.searchedToChat);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",

      secondary: {
        main: "#7200f5",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ width: { xs: 350, sm: 350 }, bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="true"
          indicatorColor="secondary"
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          {ctx.searchedStreams.map((url) => (
            <Tab key={url} value={url} label={url} />
          ))}
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
