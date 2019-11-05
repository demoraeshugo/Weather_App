import React from "react";

const CurrentWeather = (props) => {
  const divStyle = {
    borderStyle: "solid",
    borderWidth: "1px"
  };

  const ColorBlue = {
    color: "blue"
  };

  const ColorRed = {
    color: "red"
  };

  const { current, max, min, description, humidity, speed } = props;

  return (
    <>
      <div style={divStyle}>
        <div style={ColorBlue}>Current Weather Component</div>
        <div>
          The current temperature is{" "}
          <span className={ColorRed}>{current}° F</span>
        </div>
        <div>
          High <span className={ColorRed}>{max}° F</span>
        </div>
        <div>
          Low <span className={ColorRed}>{min}° F</span>
        </div>
        <div>
          Conditions: <span className={ColorRed}>{description}</span>
        </div>
        <div>
          Humidity: <span className={ColorRed}>{humidity}%</span>
        </div>
        <div>
          Wind Speed: <span className={ColorRed}>{speed}mph</span>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
