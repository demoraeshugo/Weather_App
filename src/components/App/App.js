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
        location: {
          name: "New York",
          id: 5128638,
          code: "US"
        },
        temp: {
          current: 0,
          min: 0,
          max: 0
        },
        description: "",
        humidity: 0
      },
      formValue: ""
    };
  }

  APIConfig = APIConfig;
  cityList = JsonData;

  getWeather = async () => {

    const id = this.state.currentData.location.id;
    let updatedState = JSON.parse(JSON.stringify(this.state.currentData))

    const result = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=${this.APIConfig.key}`
    )
    .then(console.log("Made API Call"))

    await result.json().then(async data => {

      updatedState.temp.current = this.unitConverstion(data.main.temp)
      updatedState.temp.min = this.unitConverstion(data.main.temp_min)
      updatedState.temp.max = this.unitConverstion(data.main.temp_max)

      this.setState({
        currentData: updatedState
      })
    }
    );
  };

  getWeatherTest = () => {
    console.log("Test")
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

    event.preventDefault();
    if (location) {

      let updatedState = JSON.parse(JSON.stringify(this.state.currentData));

      updatedState.location.name = location.name;
      updatedState.location.id = location.id;
      updatedState.location.code = location.country;

      this.setState({
        currentData: updatedState
      })

    } else {
      console.log("Error: invalid city");
    }
  };

  render() {
    const {currentData, formValue} = this.state;
    return (
      <div className="Wrapper">
        <div className="Wrapper-Child">
          <Header
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            formValue={formValue}
          ></Header>
          <Body
            currentData={currentData}
            getWeather={this.getWeatherTest}
          ></Body>
        </div>
      </div>
    );
  }
}
export default App;
