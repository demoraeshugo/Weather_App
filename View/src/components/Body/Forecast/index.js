import React from "react";
import { ReactComponent as DewDropIcon } from "../../../assets/tint-solid.svg";
import { ReactComponent as WindIcon } from "../../../assets/wind-solid.svg";
import { ReactComponent as ThermometerIcon } from "../../../assets/thermometer-half-solid.svg";
import { ReactComponent as CurrentWeatherIcon } from "../../../assets/Cloud-sun-colored.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ForecastWeather = (props) => {
  const renderForecastData = (array) => {
    //Filter array indexes so that we display only one forcast per day
    var filtered = array.filter((val, index) => index % 8 === 0);

    //Get day-of-week based on date
    function getDayOfWeek(date) {
      var dayOfWeek = new Date(date).getDay();
      return isNaN(dayOfWeek)
        ? null
        : [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ][dayOfWeek];
    }

    return (
      <>
        {filtered.map((array) => {
          var { temp, temp_min, temp_max, humidity } = array.main;
          const { description } = array.weather[0];
          var { speed } = array.wind;
          const date = array.dt_txt.slice(0, 10);
          const weekDay = getDayOfWeek(date);

          temp = Math.round(temp);
          temp_min = Math.round(temp_min);
          temp_max = Math.round(temp_max);
          speed = Math.round(speed);

          return (
            <Col key={array.dt.toString()} className="WeekDayCard">
              <Container className="Container">
                <Row className="d-flex justify-content-between Header ">
                  <span className="my-auto float-left">
                    <CurrentWeatherIcon />
                  </span>
                  <span className="WeekDay my-auto">{weekDay}</span>
                  <span className="float-right">
                    {" "}
                    <span className="MaxTemp my-auto">
                      {temp_max}° <span className="MinTemp">{temp_min}°</span>{" "}
                    </span>
                  </span>
                </Row>

                <Row className="d-flex justify-content-center">
                  <span className="my-auto">
                    <CurrentWeatherIcon />
                  </span>
                  <span className="CurrentTemp">{temp}°</span>
                </Row>

                <Row className="d-flex justify-content-center">
                  <span className="Description">{description}</span>
                </Row>

                <Row className="d-flex justify-content-center Details">

                  <Col xs={1}>
                    <Row className="d-flex justify-content-center">
                      <DewDropIcon />
                    </Row>
                    <Row className="d-flex justify-content-center">
                      <span className="humidity">{humidity}%</span>
                    </Row>
                  </Col>

                  <Col xs={5}>
                    <Row className="d-flex justify-content-center">
                      <ThermometerIcon />
                    </Row>
                    <Row className="d-flex justify-content-center">
                      <Col className="d-flex justify-content-center">
                        <span className="MaxTemp">
                          {temp_max}°{" "}
                          <span className="MinTemp">{temp_min}°</span>{" "}
                        </span>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs={1}>
                    <Row className="d-flex justify-content-center">
                      <WindIcon />
                    </Row>
                    <Row className="d-flex justify-content-center">
                      <span className="WindSpeed">{speed}m/h</span>
                    </Row>
                  </Col>

                </Row>
              </Container>
            </Col>
          );
        })}
      </>
    );
  };

  return renderForecastData(props.forecastData.list);
};

export default ForecastWeather;
