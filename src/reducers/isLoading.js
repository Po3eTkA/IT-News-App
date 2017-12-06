import { REQUEST_NEWS, GET_NEWS, IS_LOADING } from '../actionTypes';

function reducer(state = false, action) {
  switch (action.type) {
  case REQUEST_NEWS:
    return true;
  case GET_NEWS:
    return false;
  default:
    return state;
  }
}

export default reducer;
