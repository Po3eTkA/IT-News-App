import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, SearchInput, SearchInputButton } from './SearchForm.style';

import { DEFAULT_QUERY, DEFAULT_PAGE } from '../../constants';
import { checkTopStoriesSearchValue } from '../../helpers';
import { getNews, setSearchValue, setSearchKey } from '../../actions';

class SearchForm extends Component {
  state = {
    searchValue: DEFAULT_QUERY,
  };

  componentDidMount() {
    this.input.focus();
  }

  handleSubmit = event => {
    event.preventDefault();

    const { searchValue } = this.state;

    if (searchValue) {
      this.props.onSearchValue(searchValue);
      if (checkTopStoriesSearchValue(this.props.state, searchValue)) {
        this.props.onGetNews(searchValue, DEFAULT_PAGE);
      }
      this.setState({ searchValue: '' });
    }
  }

  handleChange = event => {
    if (event.target.value.match(/[a-zA-Z]/gi)) {
      this.setState({ searchValue: event.target.value });
    }
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <SearchInput
          maxLength="14"
          type="search"
          innerRef={x => { this.input = x; }}
          defaultValue={this.props.searchValue}
          onChange={this.handleChange}
        />
        <SearchInputButton type="submit" />
      </Form>
    );
  }
}

SearchForm.propTypes = {
  onSearchValue: PropTypes.func.isRequired,
  onGetNews: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  state: PropTypes.shape({
    news: PropTypes.object.isRequired,
    keywords: PropTypes.shape({
      searchValue: PropTypes.string.isRequired,
      searchKey: PropTypes.string.isRequired,
      sortKey: PropTypes.string.isRequired,
      toggleOpenMenu: PropTypes.bool.isRequired,
    }),
    isLoading: PropTypes.bool.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    state,
    searchValue: state.keywords.searchValue,
    checkedSearchKey: state.news[state.keywords.searchValue],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchValue: searchValue => dispatch(setSearchValue(searchValue)),
    onSearchKey: searchKey => dispatch(setSearchKey(searchKey)),
    onGetNews: (searchValue, page) => dispatch(getNews(searchValue, page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

