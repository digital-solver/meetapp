import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { extractLocations } from '../api';
import CitySearch from '../CitySearch';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, (test) => {
  test('When a user hasn\'t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
    given('user hasn\'t searched for any city', () => {

    });

    let AppWrapper;
    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should see a list of all upcoming events', () => {       
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });
  });

  test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {
    let CitySearchWrapper;
    given('the main page is open', () => {
      CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} locations={extractLocations(mockData)} />);
    });

    when('the user starts typing in the city textbox', () => {
      CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } })
    });

    then('the user should see a list of cities (suggestions) that match what they\'ve typed', () => {
      expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
    });
  });

  test('User can select a city from the suggested list', ({ given, and, when, then }) => {
    let AppWrapper
    given('the user was typing in the search box', async () => {       
      AppWrapper = await mount(<App />);
      AppWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
    });

    and('the suggestions list is visible', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.suggestions li')).toHaveLength(2);
    });

    when('the user selects a city from the list', () => {
      AppWrapper.find('.suggestions li').at(0).simulate('click');
    });

    then('the user\'s active city shoud be changed to their selection', () => {
      const CitySearchWrapper = AppWrapper.find(CitySearch);
      expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
    });

    and('the user should be shown that city\'s list of events', () => {     
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });
  });

});
