import { combineReducers } from 'redux';

import news from './news';
import isLoading from './isLoading';
import keywords from './keywords';

const reducer = combineReducers({
  news,
  isLoading,
  keywords,
});

export default reducer;
