import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SortLink from '../SortLink/SortLink';

import { setSortKey } from '../../actions';

import { Container } from '../../theme/grid';
import SortList from './SortingBox.style';

function SortingBox({ sortKey, onSort }) {
  return (
    <section>
      <Container>
        <SortList>
          <li>
            <SortLink
              onSort={onSort}
              activeSortKey={sortKey}
            >
              Title
            </SortLink>
          </li>
          <li>
            <SortLink
              onSort={onSort}
              activeSortKey={sortKey}
            >
              Author
            </SortLink>
          </li>
          <li>
            <SortLink
              onSort={onSort}
              activeSortKey={sortKey}
            >
              Comments
            </SortLink>
          </li>
          <li>
            <SortLink
              onSort={onSort}
              activeSortKey={sortKey}
            >
              Points
            </SortLink>
          </li>
        </SortList>
      </Container>
    </section>
  );
}

SortingBox.propTypes = {
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    sortKey: state.keywords.sortKey,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSort: sortKey => dispatch(setSortKey(sortKey)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SortingBox);
