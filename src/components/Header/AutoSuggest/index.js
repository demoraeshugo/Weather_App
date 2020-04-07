import Autosuggest from "react-autosuggest";
import React, { Component } from "react";
import "../../../Styles/styles.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      id: 0,
      suggestions: [],
    };
    this.cities = this.props.cityList;
  }

  componentDidUpdate(prevProps) {
    if (this.props.cityList !== prevProps.cityList) {
      this.cities = this.props.cityList;
    }
  }

  componentDidMount() {
    this.cities = this.props.cityList
  }

  getSuggestionValue = (suggestion) => suggestion.name;

  renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  onSuggestionsFetchRequested = ({ value }) => {
      this.loadSuggestions(value)
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  async loadSuggestions(value) {
    await this.props.getSuggestions()
    .then(console.log(this.props.cityList))
    .then(
      this.setState({
        suggestions: this.getSuggestions(value),
      })
    );
  }

  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    if (inputLength === 0) {
      return [];
    } else {
      return this.props.cityList.filter(
        (city) => city.name.toLowerCase().slice(0, inputLength) === inputValue
      );
    }
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const {
      onChange,
      onSuggestionsFetchRequested,
      onSuggestionsClearRequested,
      getSuggestionValue,
      renderSuggestion,
    } = this;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Type city name",
      value,
      onChange: onChange,
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default SearchBar;
