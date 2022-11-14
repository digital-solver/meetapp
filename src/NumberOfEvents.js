import React, { Component } from "react";
import { ErrorAlert, WarningAlert } from "./Alert";
import PropTypes from "prop-types";

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

NumberOfEvents.propTypes = {
  eventsLength: PropTypes.number.isRequired, 
  handleChange: PropTypes.func.isRequired, 
  errorText: PropTypes.string.isRequired, 
  warningText: PropTypes.string.isRequired
};

export default NumberOfEvents;
