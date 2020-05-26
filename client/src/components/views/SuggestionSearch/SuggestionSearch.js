import React from 'react';
import Autosuggest from 'react-autosuggest';
import './SuggestionSearch.css';
import Axios from 'axios';
import SmallCard from './SmallCard.js';
import { SearchOutlined } from '@ant-design/icons';

let allProducts = [];

const getAllProducts = () => {
    Axios.get('/api/product/getAllProducts')
        .then(response => {
            if (response.data.success) {
              allProducts = response.data.products;
              //console.log('all product ->',allProducts);
            } else {
                alert('Failed to fetch all product')
            }
        })
}

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : allProducts.filter(product =>
    product.title.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.title;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    <SmallCard product={suggestion} />
  </div>
);

export default class SuggestionSearch extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  componentDidMount = () => {
    getAllProducts();
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search by typing',
      value,
      type: "search",
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <div className="search-suggestion">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
        <div className="search-icon" >
          <SearchOutlined style={{ fontSize: '20px', color: '#AAA'}}/>
        </div>
      </div>
    );
  }
}