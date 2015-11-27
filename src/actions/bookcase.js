import * as ActionTypes from 'constants/bookcase';

export default {
  add_bookcase: (bookcase) => ({ type : ActionTypes.ADD_BOOKCASE, bookcase }),
  remove_bookcase: (bookcase_id) => ({ type: ActionTypes.REMOVE_BOOKCASE, bookcase_id })
};
