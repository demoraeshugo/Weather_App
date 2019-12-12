import React from "react";

const CurrentWeather = props => {
  const { current, max, min, description, humidity, speed } = props;

  return (
    <>
      <div>
        <div>Current Weather Component</div>
        <div>
          The current temperature is <span>{current}° F</span>
        </div>
        <div>
          High <span>{max}° F</span>
        </div>
        <div>
          Low <span>{min}° F</span>
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
