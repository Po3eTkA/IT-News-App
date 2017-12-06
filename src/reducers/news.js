import { GET_NEWS, DELETE_NEWS } from '../actionTypes';
import { setTopStories, deleteNews } from '../helpers';

export default function reducer(state = {}, action) {
  switch (action.type) {
  case GET_NEWS:
    return setTopStories(state, action.result, action.searchValue);

  case DELETE_NEWS: {
    const { searchValue } = action;
    const news = state[searchValue];
    const { hits, page } = news;

    const updatedList = hits.filter(item => item.objectID !== action.id);
    return {
      ...state,
      [searchValue]: { hits: updatedList, page },
    };
  }
  default:
    return state;
  }
}
