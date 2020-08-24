import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import AcesoAppBar from "./ui/AppBar";
import Page from "./ui/Page"

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AcesoAppBar />
      <Page />
    </ThemeProvider>
  );
};

export default App;
