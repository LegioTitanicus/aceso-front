import React from 'react';
import App from './App';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() });
// import { render } from "@testing-library/react";
// import renderer from 'react-test-renderer'

// ~$ jest --updateSnapshot

describe('First React component test with Enzyme', () => {
  
  it('renders without crashing', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });

  it('renders the test text', () => {
    expect(mount(<App />).find('h1').text()).toBe("Test render")
  });
});
