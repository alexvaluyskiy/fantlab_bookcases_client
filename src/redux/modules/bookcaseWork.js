import { createAction, handleActions } from 'redux-actions';

let urls = {
  'bookcaseServiceUrl': 'http://localhost:3002/v1/'
};

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_BOOKCASE_WORKS = 'LOAD_BOOKCASE_WORKS';

// ------------------------------------
// Actions
// ------------------------------------

export const loadBookcaseListAsync = (bookcaseId) => {
  return (dispatch, getState) => {
    fetch(urls.bookcaseServiceUrl + `bookcases/${bookcaseId}/works`)
      .then(response => response.json())
      .then(json => dispatch(loadBookcaseList(json)));
  };
};

export const actions = {
  loadBookcaseListAsync
};

// ------------------------------------
// Action Creators
// ------------------------------------

export const loadBookcaseList = createAction(LOAD_BOOKCASE_WORKS, (bookcaseWorks) => bookcaseWorks);

// ------------------------------------
// Reducer
// ------------------------------------

export default handleActions({
  LOAD_BOOKCASE_WORKS: (state, { payload }) => {
    return payload;
  },
}, []);
