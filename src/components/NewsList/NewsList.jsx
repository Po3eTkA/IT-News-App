import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsItem from '../NewsItem/NewsItem';

import { checkNews } from '../../helpers';
import { DEFAULT_PAGE } from '../../constants';

import { Container } from '../../theme/grid';
import NewsUlList from './NewsList.style';

import { setOpenMenu, getNews, deleteNews } from '../../actions';

class NewsList extends React.Component {
  componentDidMount() {
    if (this.props.toggleOpenMenu === true) {
      this.props.openNav(this.props.toggleOpenMenu);
    }
    this.props.onGetNews(this.props.searchValue, DEFAULT_PAGE);
  }

  render() {
    return (
      <Container>
        {this.props.newsItems.length ?
          <NewsUlList>
            {
              this.props.newsItems.map(item => (
                <NewsItem
                  key={item.objectID}
                  id={item.objectID}
                  url={item.url}
                  title={item.title}
                  author={item.author}
                  comments={item.num_comments}
                  points={item.points}
                />
              ))
            }
          </NewsUlList>
          :
          null
        }
      </Container>
    );
  }
}

NewsList.propTypes = {
  newsItems: PropTypes.arrayOf(PropTypes.shape({
    objectID: PropTypes.string.isRequired,
    author: PropTypes.string,
    url: PropTypes.string,
    num_comments: PropTypes.number,
    points: PropTypes.number,
  })),
  onGetNews: PropTypes.func.isRequired,
  openNav: PropTypes.func.isRequired,
  toggleOpenMenu: PropTypes.bool.isRequired,
  searchValue: PropTypes.string.isRequired,
};

NewsList.defaultProps = {
  newsItems: [],
};

function mapStateToProps(state) {
  return {
    toggleOpenMenu: state.keywords.toggleOpenMenu,
    searchValue: state.keywords.searchValue,
    newsItems: checkNews(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openNav: (toggleOpenMenu) => dispatch(setOpenMenu(toggleOpenMenu)),
    onGetNews: (searchValue, page) => dispatch(getNews(searchValue, page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);

