import { SET_SEARCHVALUE, SET_SEARCHKEY, SET_SORTKEY, TOGGLE_OPENMENU } from '../actionTypes';

function reducer(state = {}, action) {
  switch (action.type) {
  case SET_SEARCHVALUE:
    return {
      ...state,
      searchValue: action.searchValue,
    };

  case SET_SEARCHKEY:
    return {
      ...state,
      searchKey: action.searchValue,
    };

  case SET_SORTKEY:
    return {
      ...state,
      sortKey: action.sortKey,
    };

  // case SET_ISLOADING:
  //   return action.isLoading;

  case TOGGLE_OPENMENU:
    return {
      ...state,
      toggleOpenMenu: !action.toggleOpenMenu,
    };

  default:
    return state;
  }
}

export default reducer;
