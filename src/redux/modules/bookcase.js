import { createAction, handleActions } from 'redux-actions';
import without from 'lodash/array/without';

let urls = {
  'bookcaseServiceUrl': 'http://localhost:3001/v1/'
};

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_BOOKCASES = 'LOAD_BOOKCASES';
export const VIEW_BOOKCASES = 'VIEW_BOOKCASES';
export const ADD_BOOKCASE = 'ADD_BOOKCASE';
export const EDIT_BOOKCASE = 'EDIT_BOOKCASE';
export const DELETE_BOOKCASE = 'DELETE_BOOKCASE';

// ------------------------------------
// Actions
// ------------------------------------

export const loadBookcasesAsync = (userId) => {
  return (dispatch, getState) => {
    fetch(urls.bookcaseServiceUrl + `bookcases?userid=${userId}`)
        .then(response => response.json())
        .then(json => dispatch(loadBookcases(json)));
  };
};

export const viewBookcaseAsync = (bookcase_id) => {
  return (dispatch, getState) => {
    fetch(urls.bookcaseServiceUrl + `bookcases/${bookcase_id}`)
        .then(response => response.json())
        .then(json => dispatch(viewBookcase(bookcase_id)));
  };
};

export const addBookcaseAsync = (bookcase) => {
  console.log(bookcase);
  return (dispatch, getState) => {
    fetch(urls.bookcaseServiceUrl + 'bookcases', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookcase)
    })
    .then(response => response.json())
    .then(json => dispatch(addBookcase(json)));
  };
};

export const editBookcaseAsync = (bookcase) => {
  return (dispatch, getState) => {
    fetch(urls.bookcaseServiceUrl + `bookcases/${bookcase.bookcase_id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookcase)
    })
    .then(response => response.json())
    .then(json => dispatch(editBookcase(bookcase)));
  };
};

export const deleteBookcaseAsync = (bookcase_id) => {
  return (dispatch, getState) => {
    fetch(urls.bookcaseServiceUrl + `bookcases/${bookcase_id}`, {
      method: 'DELETE'
    })
    .then(_ => dispatch(deleteBookcase(bookcase_id)));
  };
};

export const actions = {
  loadBookcasesAsync,
  viewBookcaseAsync,
  addBookcaseAsync,
  editBookcaseAsync,
  deleteBookcaseAsync
};

// ------------------------------------
// Action Creators
// ------------------------------------

export const loadBookcases = createAction(LOAD_BOOKCASES, (bookcases) => bookcases);
export const viewBookcase = createAction(VIEW_BOOKCASES, (bookcase_id) => bookcase_id);
export const addBookcase = createAction(ADD_BOOKCASE, (bookcase) => bookcase);
export const editBookcase = createAction(EDIT_BOOKCASE, (bookcase) => bookcase);
export const deleteBookcase = createAction(DELETE_BOOKCASE, (bookcase_id) => bookcase_id);

// ------------------------------------
// Reducer
// ------------------------------------

export default handleActions({
  LOAD_BOOKCASES: (state, { payload }) => {
    return payload;
  },
  ADD_BOOKCASE: (state, { payload }) => {
    return [...state, payload];
  },
  DELETE_BOOKCASE: (state, { payload }) => {
    var element = state.find(item => item.bookcase_id === payload);
    return without(state, element);
  }
}, []);
