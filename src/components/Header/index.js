import React, { Component } from "react";
import "../Header/styles.css";
import SearchBar from "./AutoSuggest/index";
//import '../../Styles/styles.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  width = {
    width: "150px",
  };

  render() {
    const {
      handleSubmit,
      handleChange,
      formValue,
      getSuggestions,
      cityList
    } = this.props;
    return (
      <div className="navBar">
        <span>Weatherly</span>
        <SearchBar
          cityList={cityList}
          getSuggestions={getSuggestions}
        ></SearchBar>
      </div>
    );
  }
}

export default Header;

/*

 <form autoComplete="off" onSubmit={e => handleSubmit(e)}>
          <div className="autocomplete">
            <input
              onChange={e => handleChange(e)}
              value={formValue}
              id="Location"
              type="text"
              name="Location"
            ></input>
          </div>
          <input type="submit"></input>
        </form>
*/
