import React, { Component } from "react";
import { ErrorAlert, WarningAlert } from "./Alert";

export class NumberOfEvents extends Component {

  render() {
    const {eventsLength, handleChange, errorText, warningText} = this.props;

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
        <ErrorAlert text={errorText} />
        <ErrorAlert text={errorText} />
        <WarningAlert text={warningText} />
      </div>
    );
  }
}
export default NumberOfEvents;
