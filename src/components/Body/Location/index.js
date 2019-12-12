import React, { Component } from "react";
import "/Users/School/Desktop/CS_Projects/Weather_App/weather_app/src/Styles/styles.css";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
  }

  getDate() {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    var day = String(today.getDay());
    day = weekdays[day];
    var mm = String(today.getMonth());
    mm = months[mm];
    const yyyy = today.getFullYear();

    this.setState({
      date: `${day}, ${mm} ${dd}, ${yyyy}`
    });
  }

  componentDidMount() {
    this.getDate();
  }

  render() {
    const { name } = this.props.location;
    const { date } = this.state;

    return (
      <>
        <div className="location">
          <div id="cityName">{name}</div>
          <div id="date">{date}</div>
        </div>
      </>
    );
  }
}

export default Location;
