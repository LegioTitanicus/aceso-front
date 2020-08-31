import React from "react";
import { Switch, Route } from "react-router-dom";

import ScrollUpButton from "./ScrollUpButton";
import About from "./About";
import Contact from "./Contact";
import FeatureList from "./FeatureList";
import CustomizedTimeline from "./Timeline";

const Page = (props) => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={FeatureList} />
        <Route exact path="/solutions" component={FeatureList} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/production" component={CustomizedTimeline} />
      </Switch>
      <ScrollUpButton />
    </React.Fragment>
  );
};

export default Page;
