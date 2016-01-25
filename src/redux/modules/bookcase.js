import { createAction, handleActions } from 'redux-actions';
import { pushPath } from 'redux-simple-router';
import { urls } from '../../config/urls';

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_BOOKCASE_LIST = 'LOAD_BOOKCASE_LIST';
export const LOAD_BOOKCASES = 'LOAD_BOOKCASES';
export const ADD_BOOKCASE = 'ADD_BOOKCASE';
export const EDIT_BOOKCASE = 'EDIT_BOOKCASE';
export const DELETE_BOOKCASE = 'DELETE_BOOKCASE';

// ------------------------------------
// Action Creators
// ------------------------------------
const loadBookcaseListAsync = (userId) => {
  return (dispatch, getState) => {
    fetch(urls.bookcaseServiceUrl + `bookcases/users/${userId}`)
        .then(response => response.json())
        .then(bookcases => dispatch(createAction(LOAD_BOOKCASE_LIST)(bookcases)));
  };
};

const openBookcaseViewPage = (bookcaseId) => {
  return (dispatch, getState) => {
    dispatch(pushPath(`bookcases/${bookcaseId}`));
  };
};

const loadBookcaseAsync = (bookcaseId) => {
  return (dispatch, getState) => {
    fetch(urls.bookcaseServiceUrl + `bookcases/${bookcaseId}`)
        .then(response => response.json())
        .then(bookcases => dispatch(createAction(LOAD_BOOKCASES)(bookcaseId)));
  };
};

const addBookcaseAsync = (bookcase) => {
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
    .then(bookcase => dispatch(createAction(ADD_BOOKCASE)(bookcase)));
  };
};

const editBookcaseAsync = (bookcase) => {
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
    .then(bookcase => dispatch(createAction(EDIT_BOOKCASE)(bookcase)));
  };
};

const deleteBookcaseAsync = (bookcaseId) => {
  return (dispatch, getState) => {
    fetch(urls.bookcaseServiceUrl + `bookcases/${bookcaseId}`, {
      method: 'DELETE'
    })
    .then(_ => dispatch(createAction(DELETE_BOOKCASE)(bookcaseId)));
  };
};

export const actions = {
  loadBookcaseListAsync,
  loadBookcaseAsync,
  addBookcaseAsync,
  editBookcaseAsync,
  deleteBookcaseAsync,
  openBookcaseViewPage
};

// ------------------------------------
// Reducer
// ------------------------------------

export default handleActions({
  LOAD_BOOKCASE_LIST: (state, { payload }) => {
    return payload;
  },
  ADD_BOOKCASE: (state, { payload }) => {
    return [...state, payload];
  },
  EDIT_BOOKCASE: (state, { payload }) => {
    return [
      ...state.filter(item => item.bookcase_id !== payload.bookcase_id),
      payload
    ];
  },
  DELETE_BOOKCASE: (state, { payload }) => {
    return state.filter(item => item.bookcase_id !== payload);
  }
}, []);
