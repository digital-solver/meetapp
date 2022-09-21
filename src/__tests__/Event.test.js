// FEATURE: It must be able to hide and show event details

/* 
Tests:
- DONE: Parent: Event component is rendered
- DONE: Render <div className="details-container">
- DONE: Render <button className="details-button">Show Details</button>
- DONE: When <div> className list does not include "visible", it is empty
- When clicks are simulated, className="visible" is toggled on details div and button
- When className="visible" is toggled on button, button text is toggled: show/hide
- When className="visible" is toggled on div, all detail elements visibility is toggled

*/

import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe('<Event /> component', () => {
  let EventWrapper;
  
  beforeAll(() => {
    EventWrapper = shallow(<Event event={ mockData[0] } />);
  });
  
  test('renders details outer container', () => {
    const detailsContainer = EventWrapper.find('.details__outer-container');
    expect(detailsContainer).toHaveLength(1);
  });

  test('renders details toggle', () => {
    const detailsToggle = EventWrapper.find('.details__toggle');
    expect(detailsToggle).toHaveLength(1);
  });

  test('renders details inner container', () => {
    const details = EventWrapper.find('.details__inner-container');
    expect(details).toHaveLength(1);
  });

  test('detail visibility is in sync with container visible class', () => {
    const details = EventWrapper.find('.detail');
    const visible = EventWrapper.find('.visible');
    expect(!!details.length).toBe(!!(visible.length - 1));
  });

  test('button click toggles from invisible to visible', () => {
    EventWrapper.setState({isVisible: false})
    const button = EventWrapper.find('.details__toggle')
    button.simulate('click')
    expect(EventWrapper.state("isVisible")).toEqual(true)
  });

  test('button click toggles from visible to invisible', () => {
    EventWrapper.setState({isVisible: true})
    const button = EventWrapper.find('.details__toggle')
    button.simulate('click')
    expect(EventWrapper.state("isVisible")).toEqual(false)
  });

});
