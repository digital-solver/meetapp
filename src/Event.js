import React, { Component } from 'react'

export class Event extends Component {
  
  // const { details } = this.props;

  render() {
    return (
      <div className='details__outer-container'>
        <button className='details__toggle'>Show Details</button>
        <div className='details__inner-container'>
        </div>
      </div>
    )
  }
}

export default Event
