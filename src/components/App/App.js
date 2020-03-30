import React, { Component } from "react";
import Header from "../Header";
import Body from "../Body";
import JsonData from "./SmallCityList.json";
import MockCurrent from "./MockCurrent.json";
import MockForecast from "./MockForecast.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        name: "New York",
        id: 5128638
      },
      forecastData: MockForecast,
      currentData: MockCurrent,
      formValue: ""
    };
  }
  
  cityList = JsonData;

  APICall = async type => {
    const APIkey = process.env.REACT_APP_APIKey;
    var callType;
    const id = this.state.location.id;
    const unit = "imperial";
    type === "CurrentData" ? (callType = "weather") : (callType = "forecast");

    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/${callType}?id=${id}&units=${unit}&APPID=${APIkey}`
    )
      .then(this.handleErrors)
      .catch(error => console.log(error));

      return result
  }

  getWeather = async type => {
    const result = await this.APICall(type);
    if (await result) {

      result.json().then(async data => {
        if (type === "CurrentData") {
          this.setState({
            currentData: data
          });
        } else if (type === "forecastData") {
          this.setState({
            forecastData: data
          });
        }
      });
    }
  };

  getCurrentState = type => {
    let currentState;
    type === "CurrentData"
      ? (currentState = this.state.currentData)
      : (currentState = this.state.forcastData);
    return currentState;
  };

  handleErrors = response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  unitConverstion = k => {
    return Math.round(((k - 273.15) * 9) / 5 + 32);
  };

  getLocation = location => {
    for (let i = 0; i < this.cityList.length; i++) {
      if (this.cityList[i].name === location) {
        return this.cityList[i];
      }
    }
  };

  handleChange = event => {
    this.setState({
      formValue: event.target.value
    });
  };

  handleSubmit = event => {
    const input = event.target.firstChild.firstChild.value;
    const location = this.getLocation(input);

    if (location) {
      this.setState({
        location: {
          name: location.name,
          id: location.id
        }
      });
    } else {
      console.log("Error: invalid city");
    }

    event.preventDefault();
  };

  render() {
    const { forecastData, currentData, formValue, location } = this.state;
    const { getWeather, handleSubmit, handleChange } = this;

    return (
      <div className="wrapper">
          <Header
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formValue={formValue}
          ></Header>
          <Body
            currentData={currentData}
            forecastData={forecastData}
            getWeather={getWeather}
            location={location}
          ></Body>
      </div>
    );
  }
}
export default App;
