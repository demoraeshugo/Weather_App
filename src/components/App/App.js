import React, { Component } from "react";
import Header from "../Header";
import Body from "../Body";
import MockCurrent from "./MockCurrent.json";
import MockForecast from "./MockForecast.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        name: "New York",
        id: 5128638,
      },
      forecastData: MockForecast,
      currentData: MockCurrent,
      formValue: "",
    };
  }

  cityList;

  APICall = async (type) => {
    var callType;
    var url;
    const unit = "imperial";
    const id = this.state.location.id;
    const APIkey = process.env.REACT_APP_API_KEY;

    switch (type) {
      case "currentData":
        callType = "weather";
        url = `https://api.openweathermap.org/data/2.5/${callType}?id=${id}&units=${unit}&APPID=${APIkey}`;
        break;
      case "forecastData":
        callType = "forecast";
        url = `https://api.openweathermap.org/data/2.5/${callType}?id=${id}&units=${unit}&APPID=${APIkey}`;
        break;
      case "getSuggestions":
        url =
          "https://i0o3zampo3.execute-api.us-east-2.amazonaws.com/getSuggestions";
        break;
      default:
        console.log("Unhandled API call type");
    }
    const result = await fetch(url)
      .then(this.handleErrors)
      .catch((error) => console.log(error));

    return result;
  };

  getWeather = async (type) => {
    const { APICall } = this;
    const result = await APICall(type);
    if (await result) {
      result.json().then(async (data) => {
        if (type === "currentData") {
          this.setState({
            currentData: data,
          });
        } else if (type === "forecastData") {
          this.setState({
            forecastData: data,
          });
        }
      });
    }
  };

  getSuggestions = async () => {
    const { APICall } = this;
    const result = await APICall("getSuggestions");
    if (await result) {
      result.json().then(async (data) => {
        this.cityList = data;
      });
    }
  };

  getCurrentState = (type) => {
    let currentState;
    type === "CurrentData"
      ? (currentState = this.state.currentData)
      : (currentState = this.state.forcastData);
    return currentState;
  };

  handleErrors = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  unitConverstion = (k) => {
    return Math.round(((k - 273.15) * 9) / 5 + 32);
  };

  getLocation = (location) => {
    const { cityList } = this;
    for (let i = 0; i < cityList.length; i++) {
      if (cityList[i].name === location) {
        return cityList[i];
      }
    }
  };

  handleChange = (event) => {
    this.setState({
      formValue: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const input = event.target.firstChild.firstChild.value;
    const location = this.getLocation(input);

    if (location) {
      this.setState({
        location: {
          name: location.name,
          id: location.id,
        },
      });
    } else {
      console.log("Error: invalid city");
    }

    event.preventDefault();
  };

  render() {
    const { forecastData, currentData, formValue, location } = this.state;
    const {
      getWeather,
      handleSubmit,
      handleChange,
      getSuggestions,
      cityList,
    } = this;

    return (
      <div className="wrapper">
        <Header
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formValue={formValue}
          cityList={cityList}
          getSuggestions={getSuggestions}
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
