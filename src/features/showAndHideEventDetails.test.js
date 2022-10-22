import React from 'react';
import App from '../App';
import { mount } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/showAndHideEventDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;

  beforeAll(() => {
    AppWrapper = mount(<App />)
  });

  afterAll(() => {
    AppWrapper.unmount();
  })
  
  test('An event element is collapsed by default', ({ given, when, then }) => {
      given('a user has searched for a city', () => {
        AppWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
        AppWrapper.find('.suggestions li').first().simulate('click');
      });

      when('the list of events is shown', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.details__inner-container').first()).toBeDefined()
      });

      then('all event details should be hidden', async () => {
        expect(AppWrapper.find('.details__inner-container').hasClass('visible')).toBe(false);
      });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
      given('a list of unexpanded events are shown', () => {

      });

      when('a user clicks on an event', () => {
        AppWrapper.find('.details__toggle').simulate('click');
      });

      then('the event details should be revealed', () => {
        expect(AppWrapper.find('.details__inner-container').hasClass('visible')).toBe(true);
      });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
      given('an event has had its details expanded', () => {

      });

      when('a user hides details', () => {
      AppWrapper.find('.details__toggle').simulate('click');
      });

      then('the events details should collapse', () => {
        expect(AppWrapper.find('.details__inner-container').hasClass('visible')).toBe(false);
      });
  });
});
