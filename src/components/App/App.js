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
      cityList: [],
    };
  }

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

  getWeather_OLD = async (type) => {
    const { APICall } = this;
    await APICall(type).then((result) =>
      result.json().then((data) => {
        if (type === "currentData") {
          this.setState({
            currentData: data,
          });
        } else if (type === "forecastData") {
          this.setState({
            forecastData: data,
          });
        }
      })
    );
  };

  getWeather = async () => {
    var type;
    const { APICall } = this;

    type = "currentData";
    const currentData = await APICall(type).then((result) => {
      return result.json();
    });

    type = "forecastData";
    const forecastData = await APICall(type).then((result) => {
      return result.json();
    });

    if ((await currentData) && (await forecastData)) {
      this.setState({
        currentData: currentData,
        forecastData: forecastData,
      });
    }
  };

  getSuggestions = async () => {
    var type = "getSuggestions"
    const { APICall } = this;

    await APICall(type).then((result) =>
      result.json().then((data) => {
        this.setState({
          cityList: data,
        });
      })
    );
  };

  onSuggestionSelected = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    event.preventDefault();
    this.setState({
      location: {
        name: suggestion.name,
        id: suggestion.id,
      },
    });
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

  render() {
    const { forecastData, currentData, location, cityList } = this.state;
    const { getWeather, getSuggestions, onSuggestionSelected } = this;

    return (
      <div className="wrapper">
        <Header
          cityList={cityList}
          getSuggestions={getSuggestions}
          onSuggestionSelected={onSuggestionSelected}
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
