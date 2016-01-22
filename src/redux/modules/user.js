import { createAction, handleActions } from 'redux-actions';



// ------------------------------------
// Constants
// ------------------------------------
let urls = {
  'authService': 'http://localhost:3000'
};

export const LOGIN = 'LOGIN';

// ------------------------------------
// Actions
// ------------------------------------

export const LoginAsync = (userName, password) => {
  return (dispatch, getState) => {
    fetch(urls.authService + `bookcases/${bookcaseId}/works`)
      .then(response => response.json())
      .then(bookcaseWorks => {
        bookcaseWorks.forEach(work => {
          fetch(`http://fantlab.ru/work${work.work_id}.json`, { mode: 'no-cors' })
            .then(resp => resp.json())
            .then(json => console.log(json));
        })
      .catch(e => console.log(e));
    });
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
  LOGIN: (state, { payload }) => {
    return payload;
  },
}, []);
