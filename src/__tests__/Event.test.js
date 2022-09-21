// FEATURE: It must be able to hide and show event details

/* 
Tests:
- DONE: Parent: Event component is rendered
- DONE: Render <div className="details-container">
- DONE: Render <button className="details-button">Show Details</button>
- DOING: When <div> className list does not include "visible", it is empty
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
    EventWrapper = shallow(<Event details={ mockData[0] } />);
  });
  
  test('renders details container', () => {
    const detailsContainer = EventWrapper.find('.details__outer-container');
    expect(detailsContainer).toHaveLength(1);
  });

  test('renders details toggle', () => {
    const detailsToggle = EventWrapper.find('.details__toggle');
    expect(detailsToggle).toHaveLength(1);
  });

  test('renders details', () => {
    const details = EventWrapper.find('.details__inner-container');
    expect(details).toHaveLength(1);
  })

  test('toggles detail visibility', () => {
    const details = EventWrapper.find('.detail');
    const visible = EventWrapper.find('.visible');

    expect(!!details.length).toBe(!!visible.length);
  });

})
