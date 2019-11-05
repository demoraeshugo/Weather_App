import React, { Component } from "react";
import Location from "../Body/Location/index.js";
import CurrentWeather from "../Body/Current/index";

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
    //this.props.getWeather("forecastData");
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.location.name !==
      prevProps.location.name
    ) {
      this.props.getWeather();
    }
  }

  render() {
    const { currentData, location } = this.props;
    const  description  = currentData.weather[0].description
    const { temp, temp_max, temp_min, humidity } = currentData.main;
    const { speed } = currentData.wind;
  

    //this.renderCurrentWeather(current, max, min, description, humidity, wind.speed);
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
            windSpeed={speed}
          />
        </div>
      </>
    );
  }
}

export default Body;

/*

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
*/
