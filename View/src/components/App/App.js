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
        id: 5128581,
      },
      forecastData: MockForecast,
      currentData: MockCurrent,
      cityList: [],
    };
  }

  APICall = async (type, value) => {
    var callType;
    var url;
    const unit = "imperial";
    const id = this.state.location.id;
    const input = value;
    //const APIkey = process.env.REACT_APP_API_KEY;
    const APIKey = "f95e61263e551a5f7a879ac6df2d30c0";

    switch (type) {
      case "currentData":
        callType = "weather";
        url = `https://api.openweathermap.org/data/2.5/${callType}?id=${id}&units=${unit}&APPID=${APIKey}`;
        break;
      case "forecastData":
        callType = "forecast";
        url = `https://api.openweathermap.org/data/2.5/${callType}?id=${id}&units=${unit}&APPID=${APIKey}`;
        break;
      case "getSuggestionsAWS":
        url =
          "https://i0o3zampo3.execute-api.us-east-2.amazonaws.com/getSuggestions";
        break;
      case "getSuggestions":
        url = `http://localhost:5000/suggestions/${input}`;
        break;
      default:
        console.log("Unhandled API call type");
    }

    const result = await fetch(url)
      .then(this.handleErrors)
      .catch((error) => console.log(error));

    return result;
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

  getSuggestions = async (value) => {
    var type = "getSuggestions";
    const { APICall } = this;

    await APICall(type, value).then((result) =>
      result.json().then((data) => {
        this.setState({
          cityList: data,
        });
      })
    );
  };

  // Params { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  onSuggestionSelected = (event, { suggestion }) => {
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
