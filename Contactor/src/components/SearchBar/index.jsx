import React from 'react';
import PropTypes from 'prop-types';
import { SearchBar as ContactSearchBar } from 'react-native-elements';

const SearchBar = ({ search, onSearch }) => (
  <ContactSearchBar
    platform="ios"
    placeholder="Search"
    onChangeText={onSearch}
    value={search}
  />
);

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
