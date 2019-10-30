import React, { Component } from "react";
import "../App/App.css";
import Header from "../Header/index.js";
import Body from "../Body/index.js";
import APIConfig from "/Users/School/Desktop/CS_Projects/Weather_App/weather_app/src/APIKeys.js";
import JsonData from "/Users/School/Desktop/CS_Projects/Weather_App/weather_app/src/city.list.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: {
        location: "New York",
        ID: 5128638,
        code: "US",
        temp: 0,
        description: "",
        humidity: 0,
      }
    };
  }

  APIConfig = APIConfig;

  getWeather = async () => {

    const location = this.state.currentData.location;
    const code = this.state.currentData.code;
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location},${code},uk&appid=${
        this.APIConfig.key
      }`
    );

    console.log(result)

    await result.json().then(async data =>
      this.setState({
        currentData: {
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

  default = {
    currentData: {
      location: "New York",
      ID: 5128638,
      code: "US"
    }
  };

  cityList = JsonData;

  getLocation = input => {
    for (let i = 0; i < 40; i++) {
      if (this.cityList[i].name === input) {
        return this.cityList[i];
      }
    }
    console.log("ERROR: city not found");
  };

  handleClick = event => {
    console.log(event.target.value);
    event.preventDefault();
    const location = this.getLocation(event);
    this.setState({
      currentData: {
        location: location,
        ID: 5128638,
        code: "GB"
      }
    });
    
  };

  render() {
    return (
      <div className="Wrapper">
        <div className="Wrapper-Child">
          <Header handleClick={this.handleClick}></Header>
          <Body currentData={this.state.currentData} getWeather={this.getWeather}></Body>
        </div>
      </div>
    );
  }
}
export default App;
