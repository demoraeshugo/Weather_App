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

  //Debugging
  /*
  componentDidMount = () => {
    window.map = this;
    this.new_getWeather();
    this.new_getSuggestions("Bos");
  };
  */

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
        //APIKey: "f95e61263e551a5f7a879ac6df2d30c0",
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

  getSuggestions = async (input) => {
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
      URL = `http://localhost:5000/suggestions/${input}`;
    } else {
      console.log("Unhandled API call type");
    }

    return URL;
  };

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

  /* -------------------------------- Current API Call methods ------------------------------------------------- */

  old_APICall = async (type, value) => {
    var callType;
    var url;

    //OpenWeatherMap URL params
    const unit = "imperial";
    const id = this.state.location.id;
    //const APIKey = process.env.REACT_APP_API_KEY;
    const APIKey = "f95e61263e551a5f7a879ac6df2d30c0";

    //Express API URL params
    const input = value;

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

    //Fetch call and error handling
    const result = await fetch(url)
      .then(this.handleErrors)
      .catch((err) => console.log(err.message));

    return result;
  };

  old_getWeather = async () => {
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

  old_getSuggestions = async (value) => {
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
