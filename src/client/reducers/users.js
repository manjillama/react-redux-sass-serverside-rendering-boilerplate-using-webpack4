import { FETCH_USERS } from 'client/actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    default:
      return state;
  }
};
