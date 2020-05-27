import React from "react";
import Card from "./Card";
import withSizes from "react-sizes";

const ForecastWeather = (props) => {
  const mapSizesToProps = ({ width }) => ({
    shouldCollapse: width < 992,
  });

  //Filter array indexes so that we display only one forcast per day
  var filtered = props.forecastData.list.filter(
    (val, index) => index % 8 === 0
  );

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
          <Card
            key={array.dt.toString()}
            temp={temp}
            temp_min={temp_min}
            temp_max={temp_max}
            humidity={humidity}
            description={description}
            speed={speed}
            weekDay={weekDay}
          />
        );
      })}
    </>
  );
};

export default ForecastWeather;
