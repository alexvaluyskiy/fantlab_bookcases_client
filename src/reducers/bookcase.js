import { createReducer } from '../utils';
import * as ActionTypes  from 'constants/bookcase';
import remove from 'lodash/array/remove';
import without from 'lodash/array/without';

const initialState = [
  {"user_id":1,"order":2,"group":"work","bookcase_id":1,"description":"My bookcase","type":"default","bookcount":10,"name":"Just a bookcase"},
  {"user_id":1,"order":1,"group":"work","bookcase_id":2,"description":"My bookcase 2","type":"buy","bookcount":0,"name":"Just a bookcase 2"},
  {"user_id":1,"order":1,"group":"edition","bookcase_id":3,"description":"My bookcase 3","type":"expect","bookcount":13,"name":"Just a bookcase 3"}
];

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_BOOKCASE:
      console.log("adding a bookcase");
      return [
        ...state,
        action.bookcase
      ];
    case ActionTypes.REMOVE_BOOKCASE:
      var element = state.find(item =>item.bookcase_id == action.bookcase_id);
      return without(state, element);
    default:
      return state;
  }
}
