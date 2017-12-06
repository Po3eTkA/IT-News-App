export const SORTS = {
  title: 'title',
  author: 'author',
  comments: 'num_comments',
  points: 'points',
};

function sortBy(sortKey, unSortedList) {
  if (sortKey === 'author' || sortKey === 'title') {
    return unSortedList.sort((a, b) => {
      const item1 = a[SORTS[sortKey]].toLowerCase();
      const item2 = b[SORTS[sortKey]].toLowerCase();
      if (item1 < item2) {
        return -1;
      }
      if (item1 > item2) {
        return 1;
      }
      return 0;
    });
  }

  return unSortedList.sort((a, b) => b[SORTS[sortKey]] - a[SORTS[sortKey]]);
}


export function checkTopStoriesSearchValue(state, searchValue) {
  return !state.news[searchValue];
}

export function setTopStories(state, result, searchValue) {
  let lastPage = 0;
  const { hits, page } = result;
  const oldHits = state && state[searchValue] ? state[searchValue].hits : [];
  if (page !== lastPage) {
    lastPage = page;
    const filteredHits = [...hits];
    const updatedHits = [...oldHits, ...filteredHits];
    return {
      ...state,
      [searchValue]: { hits: updatedHits, page },
    };
  }
  let filteredHits = [];
  if (oldHits.length > 0) {
    filteredHits = hits.filter((_, i) => {
      if (hits[i].objectID !== undefined) {
        return hits[i].objectID !== oldHits[i].objectID;
      }
    });
  } else {
    filteredHits = [...hits];
  }
  const updatedHits = [...oldHits, ...filteredHits];
  return {
    ...state,
    [searchValue]: { hits: updatedHits, page },
  };
  // const oldHits = state && state[searchValue] ? state[searchValue].hits : [];
  // const updatedHits = [...oldHits, ...hits];
}

export const checkNews = state => {
  let unSortedList = (state.news && state.news[state.keywords.searchValue]
    && state.news[state.keywords.searchValue].hits) || [];
  unSortedList = sortBy(state.keywords.sortKey, unSortedList);
  const sortedList = [...unSortedList];
  return sortedList;
};

export const checkPage = state => (
  (state.news && state.news[state.keywords.searchValue]
    && state.news[state.keywords.searchValue].page) || 0
);
