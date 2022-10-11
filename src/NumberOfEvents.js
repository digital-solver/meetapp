import React, { Component } from 'react';

export class NumberOfEvents extends Component {

  state = { numberOfEvents: this.props.eventsLength };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ numberOfEvents: value });
  };

  render() {
    return (
      <div className='numberOfEvents'>
        <label>
          Number of Events:
          <input
            type='number'
            className='event-number'
            value={this.state.numberOfEvents}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}
export default NumberOfEvents;
