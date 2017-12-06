import { GET_NEWS, DELETE_NEWS, REQUEST_NEWS, SET_SEARCHKEY } from '../actionTypes';
import { DEFAULT_QUERY, DEFAULT_PAGE, DEFAULT_HPP, PATH_BASE,
  PATH_SEARCH, PARAM_SEARCH, PARAM_PAGE, PARAM_HPP } from '../constants';

export const getNews = (searchValue, page) => (
  dispatch => {
    dispatch({
      type: REQUEST_NEWS,
    });
    dispatch({
      type: SET_SEARCHKEY,
      searchValue,
    });
    return fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchValue}
    &${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then(response => response.json())
      .then(result => dispatch({
        type: GET_NEWS,
        result,
        searchValue,
      }))
      .catch(e => e);
  }
);

export const deleteNews = (searchValue, id) => ({
  type: DELETE_NEWS,
  searchValue,
  id,
});
