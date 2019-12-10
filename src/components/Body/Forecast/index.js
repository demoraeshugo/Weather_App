import React from "react";

const ForecastWeather = props => {

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
    //Filter array indexes so that we display only one forcast per day
    var filtered = array.filter((val, index) => index % 8 === 0);

    return (
      <>
        {filtered.map((array) => {
          const { temp, temp_min, temp_max, humidity } = array.main;
          const { description } = array.weather[0];
          const { speed } = array.wind;
          const date = array.dt_txt.slice(0, 10);
          return (
            <div key={array.dt.toString()} style={divStyle}>
              <span>{date}</span>
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

export default ForecastWeather;
