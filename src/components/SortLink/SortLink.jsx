import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

function SortLink({ children, onSort, activeSortKey }) {
  return (
    <Button
      type="button"
      marginBottom
      activeSortKey={activeSortKey}
      onClick={() => onSort(children.toLowerCase())}
    >
      {children}
    </Button>
  );
}

SortLink.propTypes = {
  children: PropTypes.node.isRequired,
  onSort: PropTypes.func.isRequired,
  activeSortKey: PropTypes.string.isRequired,
};

export default SortLink;
