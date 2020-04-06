import Autosuggest from 'react-autosuggest';
import React, { Component } from "react";
/*
const tester = [{
    "id": 5128581,
    "name": "New York City",
    "state": "NY",
    "country": "US",
    "coord": {
      "lon": -74.005966,
      "lat": 40.714272
    }
  },]

const cities = this.props.cityList

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  
  if(inputLength === 0) {
    return []
  } else {
    return cities.filter(city =>
      city.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  }

  return inputLength === 0 ? [] : cities.filter(city =>
    city.name.toLowerCase().slice(0, inputLength) === inputValue
  );

};
 
// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;
 
// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

*/

class SearchBar extends Component {
    constructor(props) {
    super(props);
    this.state = {
      value: "",
      id: 0,
      suggestions: []
    };
  }

  cities = this.props.cityList
  
  componentDidMount() {
    this.cities = this.props.cityList;
  }

  componentDidUpdate(prevProps) {
    if (this.props.cityList !== prevProps.cityList) {
      this.cities = this.props.cityList
    }
  }

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    
    if(inputLength === 0) {
      return []
    } else {
      return this.cities.filter(city =>
        city.name.toLowerCase().slice(0, inputLength) === inputValue
      );
    }
  }

  renderSuggestion = suggestion => (
    <div>
      {suggestion.name}
    </div>
  );

  onChange = (event, { newValue, newID }) => {
    this.setState({
      value: newValue,
      id: newID
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
 
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type city name',
      value,
      onChange: this.onChange
    };
 
    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default SearchBar;