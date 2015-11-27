import { combineReducers }    from 'redux';
import { routerStateReducer } from 'redux-router';
import bookcase               from './bookcase';

export default combineReducers({
  bookcases: bookcase,
  router: routerStateReducer
});
