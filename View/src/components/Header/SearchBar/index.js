import Autosuggest from "react-autosuggest";
import React, { Component } from "react";
import "../../../Styles/styles.css";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      value: "", //Form Value
      id: 0, //ID of selected value
      suggestions: [], //Suggestion Array
      isLoading: false, //Flag used for debugging
    };

    this.lastRequest = null;
  }

  loadSuggestions = async (value) => {
    const { getSuggestionsAPI } = this.props;

    if (this.lastRequest !== null) {
      clearTimeout(this.lastRequest);
    }

    this.setState({
      isLoading: true,
    });

    await getSuggestionsAPI(value)
    
    this.setState({
      isLoading: false,
      suggestions: this.getSuggestions(value),
    })
  };

  getSuggestionValue = (suggestion) => suggestion.name;

  renderSuggestion = (suggestion) => (
    <div>
      {suggestion.name}, {suggestion.country}
    </div>
  );

  onSuggestionsFetchRequested = ({ value }) => {
    this.loadSuggestions(value);
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

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
      value: newValue,
    });
  };

  shouldRenderSuggestions = (value) => {
    return value.trim().length > 2;
  };

  render() {
    const { value, suggestions } = this.state;
    const {
      onChange,
      onSuggestionsFetchRequested,
      onSuggestionsClearRequested,
      getSuggestionValue,
      renderSuggestion,
      shouldRenderSuggestions,
    } = this;
    const { onSuggestionSelected } = this.props;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Type City Name",
      value,
      onChange: onChange,
    };

    // Finally, render it!
    return (
      <div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={onSuggestionSelected}
          shouldRenderSuggestions={shouldRenderSuggestions}
        />
      </div>
    );
  }
}

export default SearchBar;
