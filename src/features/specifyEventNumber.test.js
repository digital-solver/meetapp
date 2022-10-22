import React from "react";
import { mount } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from '../App';

const feature = loadFeature('./src/features/specifyEventNumber.feature');

defineFeature(feature, test => {
  let AppWrapper;

  beforeAll(() => {
    AppWrapper = mount(<App />)
  })
  afterAll(() => {
    AppWrapper.unmount;
  })
  
  test('32 is the deafult length of events', ({ given, when, then }) => {
    given('a number of events to be shown has not been specified', () => {

    });

    when('a user searches for events in a city', () => {
      AppWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
      AppWrapper.find('.suggestions li').first().simulate('click');
    });

    then('a list of thirty two events should be shown', () => {     
      const eventNumber = AppWrapper.find('.event-number').instance().value;
      expect(parseInt(eventNumber)).toEqual(32);
    });
});

  test('User can change the number of events they want to searched', ({ given, when, then }) => {
      given('a list of events is visible', () => {

      });

      when('a user specifies a number of events to shown', () => {     
        AppWrapper.find('.event-number').simulate('change', {target: { value: 1 } });
      });

      then('the list should match the chosen number', () => {
        const eventList = AppWrapper.find('EventList li');
        const eventNumber = AppWrapper.find('.event-number').instance().value;
        expect(parseInt(eventNumber)).toEqual(eventList.length)
      });
  });
});
