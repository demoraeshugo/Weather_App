import React from "react";

const ForcastWeather = props => {
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
  const renderForecastData = array => {
    return (
      <>
        {array.map(array => {
          const { temp, temp_min, temp_max, humidity } = array.main;
          const { description } = array.weather[0];
          const { speed } = array.wind;
          return (
            <div key={array.dt.toString()} style={divStyle}>
              <div style={ColorBlue}>Forecast Weather Component</div>
              <div>
                The current temperature is{" "}
                <span style={ColorRed}>{temp}° F</span>
              </div>
              <div>
                High <span style={ColorRed}>{temp_max}° F</span>
              </div>
              <div>
                Low <span style={ColorRed}>{temp_min}° F</span>
              </div>
              <div>
                Conditions: <span style={ColorRed}>{description}</span>
              </div>
              <div>
                Humidity: <span style={ColorRed}>{humidity}%</span>
              </div>
              <div>
                Wind Speed: <span style={ColorRed}>{speed}mph</span>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return renderForecastData(props.forecastData.list);
};

export default ForcastWeather;
