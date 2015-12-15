import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import counter from './counter';
import bookcase from './bookcase';

export default combineReducers({
  counter,
  bookcase,
  router: routeReducer
});
