import React from 'react';
import ScrollUpButton from './ScrollUpButton';
import { Switch, Route } from 'react-router-dom';
import Solutions from './Solutions';
import About from './About';
import Contact from './Contact';
import Demo from './Demo';
import FeatureList from "./FeatureList";

const Page = (props) => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Solutions} />
        <Route exact path="/solutions" component={Solutions} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/demo" component={Demo} />
      </Switch>
      <ScrollUpButton />
      <FeatureList />
    </React.Fragment>
  );
};

export default Page;
