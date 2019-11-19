import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(nextState, { [action.user.id]: action.user });
    case RECEIVE_PROJECT:
      return Object.assign({}, action.payload.users)
    default: 
      return state;
  }
}

export default usersReducer;