import React from "react";
import "/Users/School/Desktop/CS_Projects/Weather_App/weather_app/src/Styles/styles.css";
import { ReactComponent as DewDropIcon } from "/Users/School/Desktop/CS_Projects/Weather_App/weather_app/src/assets/tint-solid.svg";
import { ReactComponent as WindIcon } from "/Users/School/Desktop/CS_Projects/Weather_App/weather_app/src/assets/wind-solid.svg";
import { ReactComponent as ThermometerIcon } from "/Users/School/Desktop/CS_Projects/Weather_App/weather_app/src/assets/thermometer-half-solid.svg";

const CurrentWeather = props => {
  const { current, max, min, description, humidity, speed } = props;

  return (
    <>
      <div className="currentWeather">
        <div>
          Current <span>{current}° F</span>
        </div>
        <div>
          High <span>{max}° F</span>
        </div>
        <div>
          Low <span>{min}° F</span>
        </div>
        <div className="icons">
          <DewDropIcon />
          <ThermometerIcon />
          <WindIcon />
        </div>
        <div>
          Conditions: <span>{description}</span>
        </div>
        <div>
          Humidity: <span>{humidity}%</span>
        </div>
        <div>
          Wind Speed: <span>{speed}mph</span>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
