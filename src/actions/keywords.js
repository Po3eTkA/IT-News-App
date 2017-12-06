import { SET_SEARCHVALUE, SET_SEARCHKEY, SET_SORTKEY, TOGGLE_OPENMENU } from '../actionTypes';

export const setSearchValue = searchValue => ({
  type: SET_SEARCHVALUE,
  searchValue,
});

export const setSearchKey = searchValue => ({
  type: SET_SEARCHKEY,
  searchValue,
});

export const setSortKey = sortKey => ({
  type: SET_SORTKEY,
  sortKey,
});

export const setOpenMenu = toggleOpenMenu => ({
  type: TOGGLE_OPENMENU,
  toggleOpenMenu,
});

