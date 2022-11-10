import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import EventGenre from "./EventGenre";
import { mockData } from "./mock-data";
import { extractLocations, getEvents, checkToken, getAccessToken } from "./api";
import "./nprogress.css";
import { WarningAlert } from "./Alert";
import WelcomeScreen from "./WelcomeScreen";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class App extends Component {
  state = {
    events: mockData,
    locations: extractLocations(mockData),
    eventsLength: 32,
    errorText: "",
    warningText: "Range limit!",
    showWelcomeScreen: undefined,
  };

  updateEvents = (location, eventCount = this.state.eventsLength) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
      });
    });
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ eventsLength: value });

    if (value < 1 || value > 32) {
      this.setState({
        errorText: "Not in range (1 to 32)",
      });
    } else {
      this.setState({
        errorText: "",
      });
    }

    if (value == 1 || value == 32) {
      this.setState({
        warningText: "Range limit!",
      });
    } else {
      this.setState({
        warningText: "",
      });
    }
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getData = () => {
    const {locations, events} = this.state;
    
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  }

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;

    const { events, locations, eventsLength } = this.state;

    if (!navigator.onLine) {
      return (
        <div className="App">
          <WarningAlert text={`This app is offline!`} />
          <CitySearch locations={locations} updateEvents={this.updateEvents} />
          <NumberOfEvents
            eventsLength={eventsLength}
            handleChange={this.handleChange}
            errorText={this.state.errorText}
            warningText={this.state.warningText}
          />
          <div className="data-vis-wrapper">
            <EventGenre events={events}/>
            <ResponsiveContainer height={400} >
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis
                allowDecimals={false}
                type="number"
                dataKey="number"
                name="number of events"
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
          <EventList events={events.slice(0, eventsLength)} />
          {/* <WelcomeScreen
            showWelcomeScreen={this.state.showWelcomeScreen}
            getAccessToken={() => {
              getAccessToken();
            }}
          /> */}
        </div>
      );
    } else {
      return (
        <div className="App">
          <CitySearch locations={locations} updateEvents={this.updateEvents} />
          <NumberOfEvents
            eventsLength={eventsLength}
            handleChange={this.handleChange}
            errorText={this.state.errorText}
            warningText={this.state.warningText}
          />
          <div className="data-vis-wrapper">
            <EventGenre events={events}/>
            <ResponsiveContainer height={400} >
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid />
                <XAxis type="category" dataKey="city" name="city" />
                <YAxis
                  allowDecimals={false}
                  type="number"
                  dataKey="number"
                  name="number of events"
                />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter data={this.getData()} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <EventList events={events.slice(0, eventsLength)} />
          {/* <WelcomeScreen
            showWelcomeScreen={this.state.showWelcomeScreen}
            getAccessToken={() => {
              getAccessToken();
            }}
          /> */}
        </div>
      );
    }
  }
}

export default App;
