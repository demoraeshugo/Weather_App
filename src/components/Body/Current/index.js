import React from "react";
import "../../../Styles/styles.css"
import { ReactComponent as DewDropIcon } from "../../../assets/tint-solid.svg";
import { ReactComponent as WindIcon } from "../../../assets/wind-solid.svg";
import { ReactComponent as ThermometerIcon } from "../../../assets/thermometer-half-solid.svg";
import { ReactComponent as CurrentWeatherIcon } from "../../../assets/cloud-sun-solid.svg";

const CurrentWeather = props => {
  var { current } = props;
  current = Math.round(current, 2);
  const { max, min, description, humidity, speed } = props;
  return (
    <>
      <div className="currentWeather flex-columns">
        <div className="flex-rows" id="row-1">
          <div className="icons">
            <CurrentWeatherIcon />
          </div>
          <div>
            <span id="currentTemp">{current}° F</span>
          </div>
        </div>
        <div>
          <span className="description">{description}</span>
        </div>
        <div className="flex-rows" id="row-3">
          <div className="flex-columns row-3-columns">
            <div className="icons">
              <DewDropIcon />
            </div>
            <div>
              <span id="humidity">{humidity}%</span>
            </div>
          </div>
          <span className="line"></span>
          <div className="flex-columns">
            <div className="icons">
              {" "}
              <ThermometerIcon />
            </div>
            <div className="flex-rows">
              <div id="maxTemp">{max}° F</div>
              <div id="minTemp">{min}° F</div>
            </div>
          </div>
          <span className="line"></span>
          <div className="flex-columns">
            <div className="icons">
              {" "}
              <WindIcon />
            </div>
            <div>
              <span id="windSpeed">{speed}mph</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
