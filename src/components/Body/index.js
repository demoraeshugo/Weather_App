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

  ColorRed = {
    color: "red"
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
        <Location className={this.ColorRed} location={this.props.currentData.location}></Location>
        <div style={this.divStyle}>
          <div style={this.ColorBlue}>Body Component</div>
          <div>The current temperature is <span className={this.ColorRed}>{this.props.currentData.temp.current} F</span></div>
          <div>High <span className={this.ColorRed}>{this.props.currentData.temp.max} F</span></div>
          <div>Low <span className={this.ColorRed}>{this.props.currentData.temp.min} F</span></div>
          <div>Conditions: <span className={this.ColorRed}>{this.props.currentData.description}</span></div>
          <div>Humidity: <span className={this.ColorRed}>{this.props.currentData.humidity}%</span></div>
        </div>
      </>
    );
  }
}

export default Body;
