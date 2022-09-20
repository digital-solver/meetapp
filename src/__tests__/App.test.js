import React from "react";
import { shallow } from "enzyme"; // Shallow rendering for React components
import App from "../App";
import EventList from '../EventList';

describe('<App /> component', () => {
  test('render list of events', () => {
  const AppWrapper = shallow(<App />); // Renders component in a single-evel wrapper without DOM, parents, or children
  expect(AppWrapper.find(EventList)).toHaveLength(1);
  });
})
