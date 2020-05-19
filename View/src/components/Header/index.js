import React from "react";
import "./styles.css";
import SearchBar from "./SearchBar/index";
//import '../../Styles/styles.css'

const Header = (props) => {
  
  const { getSuggestionsAPI, cityList, onSuggestionSelected } = props;

  return (
    <div className="navBar">
      <span>Weatherly</span>
      <SearchBar
        cityList={cityList}
        getSuggestionsAPI={getSuggestionsAPI}
        onSuggestionSelected={onSuggestionSelected}
      ></SearchBar>
    </div>
  );
};

export default Header;
