import React, { Component } from "react";
import PropTypes from "prop-types";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      marginTop: 0,
      display: "contents",
    };
  };

  render() {
    return (
      <div className="Alert" style={this.getStyle()}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

Alert.propTypes = { 
  text: PropTypes.string.isRequired
};

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "blue";
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "red";
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "orange";
  }
}

export {InfoAlert, ErrorAlert, WarningAlert};
