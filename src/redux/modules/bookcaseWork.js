import { createAction, handleActions } from 'redux-actions';
import { urls } from '../../config/urls';

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_BOOKCASE_WORKS = 'LOAD_BOOKCASE_WORKS';

// ------------------------------------
// Action Creators
// ------------------------------------

export const loadBookcaseWorksAsync = (bookcaseId) => {
  return (dispatch, getState) => {
    fetch(urls.bookcaseServiceUrl + `bookcases/${bookcaseId}/works`)
      .then(response => response.json())
      .then(bookcaseWorks => dispatch(createAction(LOAD_BOOKCASE_WORKS)(bookcaseWorks)));
  };
};

export const actions = {
  loadBookcaseWorksAsync
};

// ------------------------------------
// Reducer
// ------------------------------------

export default handleActions({
  LOAD_BOOKCASE_WORKS: (state, { payload }) => {
    return payload;
  }
}, []);
