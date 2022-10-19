import React, {Component} from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { mockData } from "./mock-data";
import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: mockData,
    locations: extractLocations(mockData),
    eventsLength: 32,
  }

  updateEvents = (location, eventCount = this.state.eventsLength) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') 
      ? events 
      : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount)
      });
    });
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ eventsLength: value });
  };
  
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    const {events, locations, eventsLength} = this.state;
  return (
    <div className="App">
      <CitySearch locations={locations} updateEvents={this.updateEvents}/>
      <NumberOfEvents eventsLength={eventsLength} handleChange={this.handleChange}/>
      <EventList events={events.slice(0, eventsLength)}/>
    </div>
  );
}
}

export default App;
