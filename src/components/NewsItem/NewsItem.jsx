import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../Button/Button';

import { deleteNews } from '../../actions';

import NewsListItem from './NewsItem.style';

function NewsItem(props) {
  const
    {
      id, url, title, author, comments, points, onDelete,
    } = props;
  return (
    <NewsListItem>
      <div key={id}>
        <h2>
          <a href={url} target="_blank">
            {title}
          </a>
        </h2>
        <h4>
          {author} | {comments} Comments | {points} Points
        </h4>
        <Button
          type="button"
          round
          marginLeft
          remove
          mediaQuery
          onClick={() => onDelete(props.searchValue, id)}
        >
          Remove
        </Button>
      </div>
    </NewsListItem>
  );
}

NewsItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  searchValue: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    searchValue: state.keywords.searchValue,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onDelete: (searchValue, id) => dispatch(deleteNews(searchValue, id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsItem);
