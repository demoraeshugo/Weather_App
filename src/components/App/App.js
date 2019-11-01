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
        temp: {
          current: 0,
          min: 0,
          max: 0,
        },
        main: "",
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
      //`https://api.openweathermap.org/data/2.5/weather?q=${location},${code},uk&appid=${this.APIConfig.key}`
      `http://api.openweathermap.org/data/2.5/weather?id=${ID}&APPID=${this.APIConfig.key}`
    );

    await result.json().then(async data =>
      this.setState({
        currentData: {
          location: location,
          ID: ID,
          code: code,
          temp: {
            current: this.unitConverstion(data.main.temp),
            min: this.unitConverstion(data.main.temp_min),
            max: this.unitConverstion(data.main.temp_max),
          },
          description: data.weather[0].description,
          humidity: data.main.humidity
        },
        formValue: this.state.formValue
      })
    );
  };

  /*

  {
  "coord": {
    "lon": -122.08,
    "lat": 37.39
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 296.71,
    "pressure": 1013,
    "humidity": 53,
    "temp_min": 294.82,
    "temp_max": 298.71
  },
  "visibility": 16093,
  "wind": {
    "speed": 1.5,
    "deg": 350
  },
  "clouds": {
    "all": 1
  },
  "dt": 1560350645,
  "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
  },
  "timezone": -25200,
  "id": 420006353,
  "name": "Mountain View",
  "cod": 200


  */

  unitConverstion(k) {
    return Math.round(((k - 273.15) * 9) / 5 + 32);
  }

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
    var location = event.target.firstChild.firstChild.value;
    location = this.getLocation(location);
    event.preventDefault();
    if (location) {
      const currentData = this.state.currentData;
      this.setState({
        currentData: {
          location: location.name,
          ID: location.id,
          code: location.country,
          temp: {
            current: currentData.temp.current,
            min: currentData.temp.temp_min,
            max: currentData.temp.temp_max,
          },
          description: this.state.currentData.description,
          humidity: this.state.currentData.humidity
        },
        formValue: this.state.formValue
      });
    } else {
      console.log("Error: invalid city")
    }
  };

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
