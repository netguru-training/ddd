import { combineReducers } from 'redux';

import counter from 'reducers/counter';
import users from 'reducers/users';
import quotes from 'reducers/quotes';

export default combineReducers({
  counter,
  users,
  quotes,
});
