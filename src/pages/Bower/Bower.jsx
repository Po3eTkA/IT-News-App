import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import NewsList from '../../components/NewsList/NewsList';
import LoadMore from '../../components/Footer/LoadMore';
import SortingBox from '../../components/SortingBox/SortingBox';
import SideNav from '../../components/SideNav/SideNav';

import { DEFAULT_PAGE } from '../../constants';
import sortBy from '../../helpers';
import { setSearchValue } from '../../actions';

import { Main, Wrapper } from '../Layout.style';

class Bower extends Component {
  componentWillMount() {
    this.props.onSearchValue(this.props.searchValue, DEFAULT_PAGE);
  }
  render() {
    return (
      <Wrapper>
        <Header />
        <Main>
          <SortingBox />
          <NewsList />
        </Main>
        <LoadMore />
      </Wrapper>
    );
  }
}

Bower.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearchValue: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onSearchValue: searchValue => dispatch(setSearchValue(searchValue)),
  };
}

export default connect(null, mapDispatchToProps)(Bower);
