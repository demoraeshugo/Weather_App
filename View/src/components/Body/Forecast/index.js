import React from "react";
import '../../../Styles/styles.css'

const ForecastWeather = props => {

  const renderForecastData = array => {
    //Filter array indexes so that we display only one forcast per day
    var filtered = array.filter((val, index) => index % 8 === 0);

    //Get day-of-week based on date
    function getDayOfWeek(date) {
      var dayOfWeek = new Date(date).getDay();   
      return isNaN(dayOfWeek) ? null : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][dayOfWeek];
    }

    return (
      <>
        {filtered.map((array) => {
          var { temp, temp_min, temp_max, humidity } = array.main;
          const { description } = array.weather[0];
          const { speed } = array.wind;
          const date = array.dt_txt.slice(0, 10);
          const weekDay = getDayOfWeek(date);

          temp = Math.round(temp);
          temp_min = Math.round(temp_min);
          temp_max = Math.round(temp_max);
          
          return (
            <div className="forecast" key={array.dt.toString()}>
              <span>{weekDay}</span>
              <div>
                Average{" "}
                <span>{temp}° F</span>
              </div>
              <div>
                High <span>{temp_max}° F</span>
              </div>
              <div>
                Low <span>{temp_min}° F</span>
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
          );
        })}
      </>
    );
  };

  return renderForecastData(props.forecastData.list);
};

export default ForecastWeather;
