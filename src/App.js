import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./ui/Theme";
import AcesoAppBar from "./ui/AppBar";

const App = () => {
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AcesoAppBar />
    </ThemeProvider>
  );
};

export default App;
