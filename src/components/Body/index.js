import React, { Component } from "react";
import Location from "../Body/Location/index.js";
import APIConfig from "/Users/School/Desktop/CS_Projects/Weather_App/weather_app/src/APIKeys.js"

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getWeather = async () => {
    console.log(APIConfig.key)
  };

  render() {
    this.getWeather();
    return (
      <Location></Location>
      //Current Weather Card
      //Weekly Weather
    );
  }
}

export default Body;
