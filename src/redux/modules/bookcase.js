import { createAction, handleActions } from 'redux-actions';

let urls = {
  'bookcaseServiceUrl': 'http://localhost:4001/v1/'
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
// Action Creators
// ------------------------------------

export const loadBookcasesAsync = (userId) => {
  return (dispatch, getState) => {
    fetch(urls.bookcaseServiceUrl + `bookcases/users/${userId}`)
        .then(response => response.json())
        .then(bookcases => dispatch(createAction(LOAD_BOOKCASES, (bookcases) => bookcases)));
  };
};

export const viewBookcaseAsync = (bookcaseId) => {
  return (dispatch, getState) => {
    fetch(urls.bookcaseServiceUrl + `bookcases/${bookcaseId}`)
        .then(response => response.json())
        .then(json => dispatch(viewBookcase(bookcaseId)));
  };
};

export const addBookcaseAsync = (bookcase) => {
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
    .then(bookcase => dispatch(createAction(ADD_BOOKCASE, (bookcase) => bookcase)));
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
    .then(bookcase => dispatch(createAction(EDIT_BOOKCASE, (bookcase) => bookcase)));
  };
};

export const deleteBookcaseAsync = (bookcaseId) => {
  return (dispatch, getState) => {
    fetch(urls.bookcaseServiceUrl + `bookcases/${bookcaseId}`, {
      method: 'DELETE'
    })
    .then(_ => dispatch(createAction(DELETE_BOOKCASE, (bookcaseId) => bookcaseId)));
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
// Reducer
// ------------------------------------

export default handleActions({
  LOAD_BOOKCASES: (state, { payload }) => {
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
