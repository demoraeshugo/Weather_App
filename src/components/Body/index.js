import React, { Component } from "react";
import Location from "../Body/Location/index.js";

class Body extends Component {
  divStyle = {
    borderStyle: "solid",
    borderWidth: "1px"
  };

  ColorBlue = {
    color: "blue"
  };

  componentWillMount() {
    this.props.getWeather();
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentData.location !== prevProps.currentData.location) {
      this.props.getWeather();
    }
  }

  render() {
    return (
      <>
        <Location location={this.props.currentData.location}></Location>
        <div style={this.divStyle}>
          <div style={this.ColorBlue}>Body Component</div>
          <div>The current temperature is {this.props.currentData.temp} F</div>
          <div>Current Conditions: {this.props.currentData.description}</div>
          <div>Humidity: {this.props.currentData.humidity}%</div>
        </div>
      </>
    );
  }
}

export default Body;
