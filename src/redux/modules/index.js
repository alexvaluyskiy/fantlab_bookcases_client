import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import counter from './counter';
import bookcase from './bookcase';
import bookcaseWork from './bookcaseWork';

export default combineReducers({
  counter,
  bookcases: bookcase,
  bookcaseWorks: bookcaseWork,
  router: routeReducer
});
