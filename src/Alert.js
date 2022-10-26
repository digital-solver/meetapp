import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      marginTop: 0,
      position: 'fixed',
      right: this.right,
      top: this.top,
    };
  }

  render() {
    return (
      <div className="Alert" style={this.getStyle()}>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
    this.right = '160px';
    this.top ='25px';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
    this.right = '160px';
    this.top ='100px';
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'orange';
    this.right = '160px';
    this.top ='100px';
  }
}

export {InfoAlert, ErrorAlert, WarningAlert};
