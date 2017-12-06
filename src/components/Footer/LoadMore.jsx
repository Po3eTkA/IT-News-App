import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { StyledFooter, LoadMore } from './Footer.style';

import { getNews } from '../../actions';

import Button from '../Button/Button';
import AnimatedPreloader from '../AnimatedPreloader/AnimatedPreloader';

import { checkPage } from '../../helpers';

const Footer = ({
  searchValue, isLoading, onGetNews, page,
}) => (
  !isLoading ?
    <StyledFooter>
      <LoadMore>
        <Button
          type="button"
          onClick={() => onGetNews(searchValue, page + 1)}
        >
      Load more
        </Button>
      </LoadMore>
    </StyledFooter>
    :
    <AnimatedPreloader />
);

Footer.propTypes = {
  searchValue: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onGetNews: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    searchValue: state.keywords.searchValue,
    isLoading: state.isLoading,
    page: checkPage(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetNews: (searchValue, page) => dispatch(getNews(searchValue, page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
