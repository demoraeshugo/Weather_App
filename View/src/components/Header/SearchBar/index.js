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
  }

  getSuggestionValue = (suggestion) => suggestion.name;

  renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  onSuggestionsFetchRequested = ({ value }) => {
    this.loadSuggestions(value);
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  async loadSuggestions(value) {
    await this.props
      .getSuggestions(value.toLowerCase())
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
      value: newValue,
    });
  };

  shouldRenderSuggestions = (value) => {
    return value.trim().length > 2;
  }

  render() {
    const { value, suggestions } = this.state;
    const {
      onChange,
      onSuggestionsFetchRequested,
      onSuggestionsClearRequested,
      getSuggestionValue,
      renderSuggestion,
      shouldRenderSuggestions
    } = this;
    const { onSuggestionSelected } = this.props

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
        onSuggestionSelected={onSuggestionSelected}
        shouldRenderSuggestions={shouldRenderSuggestions}
      />
    );
  }
}

export default SearchBar;

/*
 <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              onChange={(e) => handleChange(e)}
              value={formValue}
              id="Location"
              type="text"
              name="Location"
            ></input>
          </div>
          <input type="submit"></input>
        </form>



*/
