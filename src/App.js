import React from "react";
import { CssBaseline, Toolbar } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

import theme from "./ui/Theme";
import AcesoAppBar from "./ui/AppBar";
import Page from "./ui/Page";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toolbar id="back-to-top-anchor" />
      <BrowserRouter>
        <AcesoAppBar />
        <Page />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
