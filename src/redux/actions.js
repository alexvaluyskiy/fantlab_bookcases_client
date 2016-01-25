import { actions as bookcaseActions } from 'redux/modules/bookcase';
import { actions as bookcaseWorkActions } from 'redux/modules/bookcaseWork';

export const actions = Object.assign({},
  bookcaseActions,
  bookcaseWorkActions
);
