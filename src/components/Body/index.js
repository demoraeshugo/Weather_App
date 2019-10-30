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
