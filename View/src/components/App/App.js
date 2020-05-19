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

  /* ------------------------------------------ New API Call Methods ----------------------------------------- */

  //getWeather || getSuggestion -> passes URL info ->

  getWeather = async () => {
    const { getURL, APICall } = this;
    const { id } = this.state.location;
    const callTypes = ["weather", "forecast"];

    //Construct a URL paramater Object for getURL function
    const URLParams = (callType, id) => {
      return {
        callType: callType,
        unit: "imperial",
        id: id,
        APIKey: process.env.REACT_APP_API_KEY
      };
    };

    //Create an array of urls to make call
    const URLS = callTypes.map((callType) => {
      return getURL(URLParams(callType, id));
    });

    //Create an array of call responses from URLS array
    const results = URLS.map(async (URL) => {
      return await APICall(URL);
    });

    //Resolve promises from results array and then set app state
    Promise.all(results).then((results) => {
      const [currentData, forecastData] = results;
      console.log(results);
      this.setState({
        currentData: currentData,
        forecastData: forecastData,
      });
    });
  };

  getSuggestionsAPI = async (input) => {
    const { getURL, APICall } = this;
    const callType = "getSuggestions";

     //Construct a URL paramater Object for getURL function
    const URLParams = (callType, input) => {
      return {
        callType: callType,
        input: input,
      };
    };

    //Get URL required for call
    const URL = getURL(URLParams(callType, input));

    //Await call promise and set app state
    await APICall(URL).then((result) => {
      this.setState({
        cityList: result,
      });
    });
  };

  //Format URL -> passes url to ->
  getURL = (URLParams) => {
    const { callType } = URLParams;
    var URL = "";

    //OpenWeatherAPI URLs
    //API can return current weather or forecast weather based on "callType" param
    //id = location's unique id
    //unit = imperial/metric
    if (callType === "weather" || callType === "forecast") {
      const { id, unit, APIKey } = URLParams;
      URL = `https://api.openweathermap.org/data/2.5/${callType}?id=${id}&units=${unit}&APPID=${APIKey}`;
    //Express API URL
    //Takes "input" param 
    } else if (callType === "getSuggestions") {
      const { input } = URLParams;
      URL = `https://ee3bsvugde.execute-api.us-east-2.amazonaws.com/Default/getsuggestions?input=${input}`;
    } else {
      console.log("Unhandled API call type");
    }

    return URL;
  };

  //'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'

  //APICall -> returns result
  APICall = async (url) => {
    return await fetch(url)
      .then(this.handleErrors)
      .catch((err) => console.log(err.message))
      .then((result) => result.json());
  };

  handleErrors = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  //ReactAutoSuggest component function
  //Hoisted to App level in order to trigger API call when a user selects a city from the dropdown 
  //Params { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  onSuggestionSelected = (event, { suggestion }) => {
    event.preventDefault();
    this.setState({
      location: {
        name: suggestion.name,
        id: suggestion.id,
      },
    });
  };

  render() {
    const { forecastData, currentData, location, cityList } = this.state;
    const { getWeather, getSuggestionsAPI, onSuggestionSelected } = this;

    return (
      <div className="wrapper">
        <Header
          cityList={cityList}
          getSuggestionsAPI={getSuggestionsAPI}
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
