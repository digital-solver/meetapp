import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });
  
  test('render list of events', () => {
  expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
  expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  })

  test('render NumberOfEvents', () => {
  expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  })
})

describe('<App /> integration', () => {
  test('App passes "events" state as a prop to Event List', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });

  test('list of events matches city selected by user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({suggestions: locations});
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random()*(suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter((event) => event.location === selectedCity);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
    });

  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
  });

  test('EventList length is 32 by default', async () => {
    const AppWrapper = mount(<App />)
    const appEventsState = AppWrapper.state('eventsLength');
    expect(appEventsState).toEqual(32);
    expect(AppWrapper.find(NumberOfEvents).state('numberOfEvents')).toEqual(appEventsState);
    expect(AppWrapper.find(EventList).state('numberOfEvents')).toEqual(appEventsState);
    AppWrapper.unmount();
    });

  test('EventList updates when new length is specified in NumberOfEvents', async () => {
    const AppWrapper = mount(<App />);
    const NumberOfEventsWrapper = AppWrapper.find('NumberOfEvents');
    const EventListWrapper = AppWrapper.find('EventList');
    NumberOfEventsWrapper.simulate('change', { target: { value: 10 } });
    expect(EventListWrapper.state('numberOfEvents')).toEqual(NumberOfEventsWrapper.state('numberOfEvents'))
    AppWrapper.unmount();
  });

});
