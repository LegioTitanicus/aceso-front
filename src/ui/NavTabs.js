import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from 'react-router-dom';

const NavTabs = () => {
  const [value, setValue] = useState(2);

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
        <Tab label="Demo" component={Link} to="/demo" />
      </Tabs>
    </Paper>
  );
};

export default NavTabs;
