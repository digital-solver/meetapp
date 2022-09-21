import React, { Component } from 'react'
import './Event.css';

export class Event extends Component {
  
  state = {isVisible: false}
  
  clickHandler = () => {
    this.setState({isVisible: !this.state.isVisible})
  }

  render() {

  const { isVisible } = this.state.isVisible;
  const { details } = this.props;

    return (
      <div className='details__outer-container'>
        <h2>{details.summary}</h2>
        <p>{details.description}</p>
        <button className='details__toggle' onClick={this.clickHandler}> 
          <span className={isVisible ? "details__toggle--show-text" : "details__toggle--show-text visible"}>Show</span>
          <span className={isVisible ? "details__toggle--hide-text visible" : "details__toggle--hide-text"}>Hide</span>
        </button>
        <div className={isVisible ? "details__inner-container visible" : "details__inner-container"}>
          <p>Location: {details.location}</p>
          <p>From: {new Date(details.start.dateTime)}</p>
          <p>Until: {new Date(details.end.dateTime)}</p>
        </div>
      </div>
    );
  }
}

export default Event
