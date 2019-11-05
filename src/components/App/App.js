import React, { Component } from "react";
import "../App/App.css";
import Header from "../Header/index.js";
import Body from "../Body/index.js";
import APIConfig from "/Users/School/Desktop/CS_Projects/Weather_App/weather_app/src/APIKeys.js";
import JsonData from "/Users/School/Desktop/CS_Projects/Weather_App/weather_app/src/city.list.json";
import MockCurrent from "/Users/School/Desktop/CS_Projects/Weather_App/weather_app/src/components/App/MockCurrent.json"
import MockForecast from "/Users/School/Desktop/CS_Projects/Weather_App/weather_app/src/components/App/MockForecast.json"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*
      currentData: {
        location: {
          name: "New York",
          id: 5128638
        },
        temp: {
          current: 0,
          min: 0,
          max: 0
        },
        wind: {
          speed: 0,
          direction: ""
        },
        description: "",
        humidity: 0
      },
      */
      location: {
        name: "New York",
        id: 5128638
      },
      forecastData: MockForecast,
      currentData: MockCurrent,
      formValue: ""
    };
  }

  APIConfig = APIConfig;
  cityList = JsonData;


  getWeather = async type => {
    var updatedState, callType;

    //Get Current State
    const currentData = this.getCurrentState(type);
    const id = this.state.location.id;

    //Convert Current State to an Object for updating
    updatedState = JSON.parse(JSON.stringify(currentData));

    type === "CurrentData" ? (callType = "weather") : (callType = "forecast");

    //Call API
    const result = await fetch(
      `http://api.openweathermap.org/data/2.5/${callType}?id=${id}&APPID=${this.APIConfig.key}`
    )
      .then(this.handleErrors)
      .catch(error => console.log(error));

    if (await result) {
      result.json().then(async data => {

        if(type === "CurrentData") {
          updatedState.main.temp = this.unitConverstion(data.main.temp)
          updatedState.main.temp_min = this.unitConverstion(data.main.temp_min)
          updatedState.main.temp_max =  this.unitConverstion(data.main.temp_max)
          this.setState({
            currentData: updatedState
          })
        } else if (type === "forecastData") {
          this.setState({
            forecastData: data
          })
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

  handleErrors(response) {
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
      let updatedState = JSON.parse(JSON.stringify(this.state.currentData));

      updatedState.location = {
        name: location.name,
        id: location.id
      };

      this.setState({
        currentData: updatedState
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
      <div className="Wrapper">
        <div className="Wrapper-Child">
          <Header
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formValue={formValue}
          ></Header>
          <Body currentData={currentData} getWeather={getWeather} location={location}></Body>
        </div>
      </div>
    );
  }
}
export default App;
