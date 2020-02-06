import React, { Component } from "react";
import Location from "../Body/Location/index.js";
import CurrentWeather from "../Body/Current/index";
import ForecastWeather from "./Forecast/index";
import "/Users/School/Desktop/CS_Projects/Weather_App/weather_app/src/Styles/styles.css";

class Body extends Component {
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
        <div className="body">
          <div className="section-main flex-columns">
            <Location location={location}></Location>
            <CurrentWeather
              current={temp}
              max={temp_max}
              min={temp_min}
              description={description}
              humidity={humidity}
              speed={speed}
            />
          </div>
          <div className="section-bottom">
            <ForecastWeather forecastData={forecastData} />
          </div>
        </div>
      </>
    );
  }
}

export default Body;
