import React, { Component } from "react";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
      
  }

  render() {
    return <div>{this.props.location}</div>;
  }
}

export default Location;
