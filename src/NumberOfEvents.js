import React, { Component } from 'react';

export class NumberOfEvents extends Component {

  render() {
    const {eventsLength, handleChange} = this.props

    return (
      <div className='numberOfEvents'>
        <label>
          Number of Events:
          <input
            type='number'
            className='event-number'
            value={eventsLength}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  }
}
export default NumberOfEvents;
