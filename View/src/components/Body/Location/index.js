import React, { Component } from "react";
import "../../../Styles/styles.css";
import Container from "react-bootstrap/Container";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
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
      "Saturday",
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
      "December",
    ];
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    var day = String(today.getDay());
    day = weekdays[day];
    var mm = String(today.getMonth());
    mm = months[mm];
    const yyyy = today.getFullYear();

    this.setState({
      date: `${day}, ${mm} ${dd}, ${yyyy}`,
    });
  }

  componentDidMount() {
    this.getDate();
  }

  render() {
    const { name } = this.props.location;
    const { date } = this.state;

    return (
      <Container fluid id="Location">
        <Container fluid id="CityName">{name}</Container>
        <Container fluid id="Date">{date}</Container>
      </Container>
    );
  }
}

export default Location;
