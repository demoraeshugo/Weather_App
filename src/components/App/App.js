import React, { Component } from "react";
import "../App/App.css";
import Header from "../Header/index.js";
import Body from "../Body/index.js";
import APIConfig from "/Users/School/Desktop/CS_Projects/Weather_App/weather_app/src/APIKeys.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: {
        location: "New York",
        ID: 5128638,
        Code: "US",
        Temp: 0,
        Description: "",
        Humidity: 0
      }
    };
  }

  APIConfig = APIConfig;

  getWeatherOnStart = async () => {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.currentData.location},${this.state.currentData.Code},uk&appid=${this.APIConfig.key}`
    );
    await result.json().then(async data =>
      this.setState({
        currentData: {
          location: this.state.currentData.location,
          ID: this.state.currentData.ID,
          Code: this.state.currentData.Code,
          Temp: this.unitConverstion(data.main.temp),
          Description: data.weather[0].main,
          Humidity: data.main.humidity
        }
      })
    );
  };

  unitConverstion(k) {
    return Math.round(((k - 273.15) * 9/5 + 32))
  }

  /*
  getWeatherUsingUserLocation = async position => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${"New York"},uk&appid=${
        this.APIConfig.key
      }`
    );
    const data = await result.json();
    const name = data.name;
    console.log(name);
  };
  */

  /*
  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getWeatherOnStart);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  */

  /*
    var getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getWeatherOnStart());
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };
    */

  /*
    var setPosition = position => {
      var location = {
        lat: position.coords.latitude,
        long: position.coords.longitude
      };
      //console.log(location)
      return location;
    };
    */
  //this.getWeatherOnStart(getLocation());

  componentWillMount() {
    this.getWeatherOnStart();
  }

  componentWillUpdate() {
    this.getWeatherOnStart();
  }

  render() {
    return (
      <div className="Wrapper">
        <div className="Wrapper-Child">
          <div>
            The current temperature in, {this.state.currentData.location} is{" "}
            {this.state.currentData.Temp}
          </div>
          <div>
            It is {this.state.currentData.Description}, the humidity is at{" "}
            {this.state.currentData.Humidity}
          </div>
          <Body currentLocation={this.state.currentLocation}></Body>
        </div>
      </div>
    );
  }
}
export default App;

// <Header></Header>
