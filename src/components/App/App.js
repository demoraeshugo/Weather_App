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
        humidity: 0
      },
      formValue: ""
    };
  }

  APIConfig = APIConfig;
  cityList = JsonData;

  getWeather = async () => {
    const location = this.state.currentData.location;
    const code = this.state.currentData.code;
    const ID = this.state.currentData.ID;
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location},${code},uk&appid=${this.APIConfig.key}`
    );

    await result.json().then(async data =>
      this.setState({
        currentData: {
          location: location,
          ID: ID,
          code: code,
          temp: this.unitConverstion(data.main.temp),
          description: data.weather[0].main,
          humidity: data.main.humidity,
        },
        formValue: this.state.formValue
      })
    );
  };

  unitConverstion(k) {
    return Math.round(((k - 273.15) * 9) / 5 + 32);
  }

  getLocation = location => {
    for (let i = 0; i < this.cityList.length; i++) {
      if (this.cityList[i].name === location) {
        return this.cityList[i];
      }
    }
    console.log("ERROR: city not found");
  };

  handleChange = event => {
    this.setState({
      formValue: event.target.value
    });
  };

  handleSubmit = event => {
    var location = event.target.firstChild.firstChild.value;
    location = this.getLocation(location);
    event.preventDefault();
    this.setState({
      currentData: {
        location: location.name,
        ID: location.id,
        code: location.country,
        temp: this.state.currentData.temp,
        description: this.state.currentData.description,
        humidity: this.state.currentData.humidity,
      },
      formValue: this.state.formValue
    })
  }

  render() {
    return (
      <div className="Wrapper">
        <div className="Wrapper-Child">
          <Header
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            formValue={this.state.formValue}
          ></Header>
          <Body
            currentData={this.state.currentData}
            getWeather={this.getWeather}
          ></Body>
        </div>
      </div>
    );
  }
}
export default App;
