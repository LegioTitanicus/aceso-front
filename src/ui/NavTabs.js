import React, { useState } from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";

const NavTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Solutions" component={Link} to="/solutions" />
        <Tab label="About" component={Link} to="/about" />
        <Tab label="Contact" component={Link} to="/contact" />
        <Tab label="Production" component={Link} to="/production" />
      </Tabs>
    </Paper>
  );
};

export default NavTabs;
