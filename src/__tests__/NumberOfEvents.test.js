// FEATURE: Must specify the number of events

/* Tests:

- PARENT: NumberofEvents component rendered
- Renders a label element and 
- Renders: number input; class: 'event-number'; 
- Number input default value is 32
- Change of value event updates the state
- Number of events on page matches number in state
 
*/


import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render number input', () => {
    expect(NumberOfEventsWrapper.find('.event-number')).toHaveLength(1);
  });

  test('default number is 32', () => {
    expect(NumberOfEventsWrapper.find('.event-number').prop('value')).toBe(32);
  });

  test('input value reflects state', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32
    });
    const Event = { target: { value: 6 } };
    NumberOfEventsWrapper.find('.event-number').simulate('change', Event);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(6);
  });
});
