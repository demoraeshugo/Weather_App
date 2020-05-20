import React, { Component } from "react";
import Location from "./Location/index.js";
import CurrentWeather from "./Current/index";
import ForecastWeather from "./Forecast/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Body extends Component {
  componentDidMount() {
    this.props.getWeather();
  }

  //If location prop changes, make call for new location ------
  componentDidUpdate(prevProps) {
    if (this.props.location.name !== prevProps.location.name) {
      this.props.getWeather();
    }
  }

  render() {
    const { currentData, forecastData, location } = this.props;
    const { description } = currentData.weather[0];
    const { temp, humidity, temp_max, temp_min } = currentData.main;
    const { speed } = currentData.wind;

    return (
      <Container className="body" id="Body">
        <Row>
          <Location location={location} />
        </Row>
        <Row>
          <CurrentWeather
            current={temp}
            max={temp_max}
            min={temp_min}
            description={description}
            humidity={humidity}
            speed={speed}
          />
        </Row>
        <Row>
          <ForecastWeather forecastData={forecastData} />
        </Row>
      </Container>
    );
  }
}

export default Body;
