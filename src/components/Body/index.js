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
    const { description, humidity, wind } = this.props.currentData;
    const { ColorRed, divStyle, ColorBlue} = this;
    
    return (
      <>
        <Location
          className={ColorRed}
          currentData={this.props.currentData}
        ></Location>
        <div style={divStyle}>
          <div style={ColorBlue}>Body Component</div>
          <div>
            The current temperature is{" "}
            <span className={ColorRed}>{current}° F</span>
          </div>
          <div>
            High <span className={ColorRed}>{max}° F</span>
          </div>
          <div>
            Low <span className={ColorRed}>{min}° F</span>
          </div>
          <div>
            Conditions: <span className={ColorRed}>{description}</span>
          </div>
          <div>
            Humidity: <span className={ColorRed}>{humidity}%</span>
          </div>
          <div>
            Wind Speed: <span className={ColorRed}>{wind.speed}mph</span>
          </div>
        </div>
      </>
    );
  }
}

export default Body;
