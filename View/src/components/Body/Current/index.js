import React from "react";
import { ReactComponent as DewDropIcon } from "../../../assets/tint-solid.svg";
import { ReactComponent as WindIcon } from "../../../assets/wind-solid.svg";
import { ReactComponent as ThermometerIcon } from "../../../assets/thermometer-half-solid.svg";
import { ReactComponent as CurrentWeatherIcon } from "../../../assets/Cloud-sun-colored.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CurrentWeather = (props) => {
  var { current, max, min, speed } = props;
  const { description, humidity } = props;

  current = Math.round(current);
  max = Math.round(max);
  min = Math.round(min);
  speed = Math.round(speed);

  return (
    <Container fluid="xl">
      <Row className="justify-content-center" id="Current">
        <Col className="my-auto">
          <CurrentWeatherIcon />
        </Col>

        <Col id="CurrentTemp">
          <span>{current}°</span>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center">
        <span id="Description">{description}</span>
      </Row>

      <Row className="justify-content-center" id="Details">
        <Col>
          <Row className="d-flex justify-content-center">
            <DewDropIcon />
          </Row>
          <Row className="d-flex justify-content-center">
            <span id="humidity">{humidity}%</span>
          </Row>
        </Col>

        <Col>
          <Row className="d-flex justify-content-center">
            <ThermometerIcon />
          </Row>
          <Row className="d-flex justify-content-center">
            <span id="MaxTemp">
              {max}° <span id="MinTemp">{min}°</span>{" "}
            </span>
          </Row>
        </Col>

        <Col>
          <Row className="d-flex justify-content-center">
            <WindIcon />
          </Row>
          <Row className="d-flex justify-content-center">
            <span id="WindSpeed">{speed}m/h</span>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentWeather;
