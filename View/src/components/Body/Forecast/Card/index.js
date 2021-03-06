import React from "react";
import { ReactComponent as DewDropIcon } from "../../../../assets/tint-solid.svg";
import { ReactComponent as WindIcon } from "../../../../assets/wind-solid.svg";
import { ReactComponent as ThermometerIcon } from "../../../../assets/thermometer-half-solid.svg";
import { ReactComponent as CurrentWeatherIcon } from "../../../../assets/Cloud-sun-colored.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import withSizes from "react-sizes";

const Card = (props) => {
  const {
    temp,
    temp_min,
    temp_max,
    humidity,
    description,
    speed,
    weekDay,
    shouldCollapse
  } = props;
  return (
    <Col className="WeekDayCard" xs={12} sm={12} md="auto" lg="auto" xl="auto">
      <Container className="Card-Container">
        <Container className="Header-Container my-auto">
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
        </Container>

        <Collapse in={!shouldCollapse}>
          <Container className="Body-Container">
            <Row className="justify-content-center">
              <Col xs="auto" className="d-flex">
                <Container className="my-auto">
                  <CurrentWeatherIcon />
                </Container>
                <span className="CurrentTemp">{temp}°</span>
              </Col>
            </Row>

            <Row className="d-flex justify-content-center">
              <span className="Description">{description}</span>
            </Row>

            <Row className="d-flex justify-content-center Details">
              <Col>
                <Row className="d-flex justify-content-center">
                  <DewDropIcon />
                </Row>
                <Row className="d-flex justify-content-center">
                  <span className="humidity">{humidity}%</span>
                </Row>
              </Col>

              <Col>
                <Row className="d-flex justify-content-center">
                  <ThermometerIcon />
                </Row>
                <Row className="d-flex justify-content-center">
                  <span className="MaxTemp">
                    {temp_max}° <span className="MinTemp">{temp_min}°</span>{" "}
                  </span>
                </Row>
              </Col>

              <Col>
                <Row className="d-flex justify-content-center">
                  <WindIcon />
                </Row>
                <Row className="d-flex justify-content-center">
                  <span className="WindSpeed">{speed}m/h</span>
                </Row>
              </Col>
            </Row>
          </Container>
        </Collapse>
      </Container>
    </Col>
  );
};

const mapSizesToProps = ({ width }) => ({
  shouldCollapse: width < 992,
});

export default withSizes(mapSizesToProps)(Card);
