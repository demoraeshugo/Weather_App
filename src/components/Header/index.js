import React, { Component } from "react";
import "./styles.css";
import SearchBar from "./SearchBar/index";
import '../../Styles/styles.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  width = {
    width: "150px"
  };

  render() {
    return (
      <div className="navBar">
        <span>Weatherly</span>
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
        <SearchBar></SearchBar>
      </div>
    );
  }
}

export default Header;

/*


*/
