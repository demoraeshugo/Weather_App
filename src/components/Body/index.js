import React, { Component } from "react";
import Location from "../Body/Location/index.js";
import APIConfig from "/Users/School/Desktop/CS_Projects/Weather_App/weather_app/src/APIKeys.js";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = this.default;
  }

  default = {
    currentData: {
      location: this.props.currentData.location,
      ID: this.props.currentData.ID,
      code: this.props.currentData.code,
      temp: 0,
      description: "",
      humidity: 0
    }
  };

  APIConfig = APIConfig;

  getWeather = async () => {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.currentData.location},${this.state.currentData.Code},uk&appid=${this.APIConfig.key}`
    );

    await result.json().then(async data =>
      this.setState({
        currentData: {
          location: this.state.currentData.location,
          ID: this.state.currentData.ID,
          code: this.state.currentData.Code,
          temp: this.unitConverstion(data.main.temp),
          description: data.weather[0].main,
          humidity: data.main.humidity
        }
      })
    );
  };

  unitConverstion(k) {
    return Math.round(((k - 273.15) * 9) / 5 + 32);
  }

  componentWillMount() {
    this.getWeather();
  }

  componentWillReceiveProps() {}

  componentWillUpdate() {}

  divStyle = {
    borderStyle: "solid",
    borderWidth: "1px"
  }

  render() {
    return (
      <>
        <Location location={this.state.currentData.location}></Location>
        <div style={this.divStyle}>
          <div>Body Componenet</div>
          <div >
            The current temperature is{" "}
            {this.state.currentData.temp} F
          </div>
          <div>Current Conditions: {this.state.currentData.description}</div>
          <div>Humidity: {this.state.currentData.humidity}%</div>
        </div>
      </>
    );
  }
}

export default Body;
