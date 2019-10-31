import React, { Component } from "react";

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

  divStyle = {
    borderStyle: "solid",
    borderWidth: "1px"
  }

  colorBlue = {
    color: "blue",
  }

  render() {
    return (
      <>
        <div style={this.divStyle}>
          <div style={this.colorBlue}>Location Component</div>
          <div>{this.props.location}</div>
          <div>{this.state.date}</div>
        </div>
      </>
    );
  }
}

export default Location;
