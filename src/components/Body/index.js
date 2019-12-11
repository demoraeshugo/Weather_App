import React, { Component } from "react";
import Location from "../Body/Location/index.js";
import CurrentWeather from "../Body/Current/index";
import ForecastWeather from "./Forecast/index";

class Body extends Component {
  divStyle = {
    borderStyle: "solid",
    borderWidth: "1px"
  };

  colorBlue = {
    color: "blue"
  };

  componentDidMount() {
    this.props.getWeather("CurrentData");
    this.props.getWeather("forecastData");
  }

  //If location prop changes, make call for new location ------
  componentDidUpdate(prevProps) {
    if (this.props.location.name !== prevProps.location.name) {
      this.props.getWeather("CurrentData");
      this.props.getWeather("forecastData");
    }
  }

  render() {
    const { currentData, forecastData, location } = this.props;
    const { description } = currentData.weather[0];
    const { temp, humidity, temp_max, temp_min } = currentData.main;
    const { speed } = currentData.wind;

    return (
      <>
        <div style={this.divStyle}>
          <span style={this.colorBlue}>Body Component</span>
          <Location location={location}></Location>
          <CurrentWeather
            current={temp}
            max={temp_max}
            min={temp_min}
            description={description}
            humidity={humidity}
            speed={speed}
          />
          <ForecastWeather forecastData={forecastData} />
        </div>
      </>
    );
  }
}

export default Body;