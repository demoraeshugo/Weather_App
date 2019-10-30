import React, { Component } from "react";
import "../App/App.css";
import Header from "../Header/index.js";
import Body from "../Body/index.js";
import APIConfig from "/Users/School/Desktop/CS_Projects/Weather_App/weather_app/src/APIKeys.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.default
  }

  default = {
    currentData: {
        location: "New York",
        ID: 5128638,
        code: "US",
      }
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

/*
  componentWillMount() {
    this.getWeatherOnStart();
  }

  componentWillUpdate() {
    this.getWeatherOnStart();
  }
  */

  render() {
    return (
      <div className="Wrapper">
        <div className="Wrapper-Child">
          <Body currentData={this.state.currentData}></Body>
        </div>
      </div>
    );
  }
}
export default App;

// <Header></Header>
