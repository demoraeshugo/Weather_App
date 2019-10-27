import React, { Component } from "react";
import Location from "../Body/Location/index.js";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getWeather = async () => {
    
  };

  render() {
    return (
      <Location></Location>
      //Current Weather Card
      //Weekly Weather
    );
  }
}

export default Body;
