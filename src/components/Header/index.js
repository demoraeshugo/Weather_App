import React, { Component } from "react";
import "../Header/styles.css";
import JsonData from "/Users/School/Desktop/CS_Projects/Weather_App/weather_app/src/city.list.json";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  cityList = JsonData;

  divStyle = {
    borderStyle: "solid",
    borderWidth: "1px"
  };

  ColorBlue = {
    color: "blue"
  };

  width = {
    width: "150px"
  };

  render() {
    return (
      <div style={this.divStyle}>
        <div style={this.ColorBlue}>Header Component</div>
        <form autoComplete="off" onSubmit={e => this.props.handleSubmit(e)}>
          <div className="autocomplete">
            <input
              onChange={e => this.props.handleChange(e)}
              value={this.props.formValue}
              id="Location"
              type="text"
              name="Location"
            ></input>
          </div>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default Header;