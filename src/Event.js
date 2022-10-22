import React, { Component } from 'react'
import './Event.css';

export class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    }
  }

  
  clickHandler = () => {
    this.setState({isVisible: !this.state.isVisible});
  };

  render() {
  const isVisible = this.state.isVisible;
  const { event } = this.props;

    return (
      <div className='details__outer-container event'>
        <h2>{event.summary}</h2>
        <p>{event.description}</p>
        <button className='details__toggle' onClick={this.clickHandler}> 
          <span className={isVisible ? "details__toggle--show-text" : "details__toggle--show-text visible"}>Show</span>
          <span className={isVisible ? "details__toggle--hide-text visible" : "details__toggle--hide-text"}>Hide</span>
        </button>
        <div className={isVisible ? "details__inner-container visible" : "details__inner-container"}>
          <p className='event__location'>Location: {event.location}</p>
          <p className='event__start'>From: {event.start.dateTime}</p>
          <p className='event__end'>Until: {event.end.dateTime}</p>
        </div>
      </div>
    );
  }
}

export default Event
