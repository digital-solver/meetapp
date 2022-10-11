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

  test('input value reflects state', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32
    });
    const Event = { target: { value: 6 } };
    NumberOfEventsWrapper.find('.event-number').simulate('change', Event);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(6);
  });
});
