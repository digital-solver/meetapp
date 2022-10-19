import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';

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

    });
  });

  test('User can select a city from the suggested list', ({ given, and, when, then }) => {
    given('the user was typing in the search box', () => {       

    });

    and('the suggestions list is visible', () => {

    });

    when('the user selects a city from the list', () => {

    });

    then('the user\'s active city shoud be changed to their selection', () => {

    });

    and('the user should be shown that city\'s list of events', () => {     

    });
  });

  test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {
    given('the main page is opens', () => {

    });

    when('the user starts typing in the city textbox', () => {

    });

    then('the user should see a list of cities (suggestions) that match what they\'ve typed', () => {

    });
  });

});
