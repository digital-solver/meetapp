import React, {Component} from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { mockData } from "./mock-data";
import { extractLocations, getEvents } from './api';
import './nprogress.css';
import { WarningAlert } from './Alert';

class App extends Component {
  state = {
    events: mockData,
    locations: extractLocations(mockData),
    eventsLength: 32,
    errorText: '',
    warningText: 'Range limit!',
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
    this.setState({eventsLength: value});

    if (value < 1 || value > 32) {
        this.setState({ 
          errorText: 'Not in range (1 to 32)',
        })
      } else {
        this.setState({
          errorText: '',
        });
      } 
    
    if (value == 1 || value == 32) {
      this.setState({
        warningText: 'Range limit!',
      })
    } else {
      this.setState({
        warningText: '',
      })
    }
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

    if (!navigator.onLine) {
      return (
        <div className="App">
          <WarningAlert text={`This app is offline!`} className='online-status-warning'/>
          <CitySearch locations={locations} updateEvents={this.updateEvents}/>
          <NumberOfEvents eventsLength={eventsLength} handleChange={this.handleChange} errorText={this.state.errorText} warningText={this.state.warningText}/>
          <EventList events={events.slice(0, eventsLength)}/>
        </div>
      );
    } else {
    return (
      <div className="App">
        <CitySearch locations={locations} updateEvents={this.updateEvents}/>
        <NumberOfEvents eventsLength={eventsLength} handleChange={this.handleChange} errorText={this.state.errorText} warningText={this.state.warningText}/>
        <EventList events={events.slice(0, eventsLength)}/>
      </div>
    ); 
  }

}
}

export default App;
