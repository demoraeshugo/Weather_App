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
    if (
      this.props.currentData.location.name !==
      prevProps.currentData.location.name
    ) {
      this.props.getWeather();
    }
  }

  render() {
    const { current, max, min } = this.props.currentData.temp;
    const { description, humidity } = this.props.currentData;
    return (
      <>
        <Location
          className={this.ColorRed}
          currentData={this.props.currentData}
        ></Location>
        <div style={this.divStyle}>
          <div style={this.ColorBlue}>Body Component</div>
          <div>
            The current temperature is{" "}
            <span className={this.ColorRed}>{current} F</span>
          </div>
          <div>
            High <span className={this.ColorRed}>{max} F</span>
          </div>
          <div>
            Low <span className={this.ColorRed}>{min} F</span>
          </div>
          <div>
            Conditions: <span className={this.ColorRed}>{description}</span>
          </div>
          <div>
            Humidity: <span className={this.ColorRed}>{humidity}%</span>
          </div>
        </div>
      </>
    );
  }
}

export default Body;
