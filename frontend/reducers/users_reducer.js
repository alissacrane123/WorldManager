import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PROJECT, RECEIVE_NEW_PM, RECEIVE_PROJECTS } from '../actions/project_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(nextState, { [action.user.id]: action.user });
    case RECEIVE_PROJECT:
      // take away because now creating PM - maybe not
      return Object.assign({}, action.payload.users);
    case RECEIVE_NEW_PM:
      return Object.assign(nextState, { [action.payload.user.id]: action.payload.user})
    case RECEIVE_PROJECTS:
      return action.payload.users
    default: 
      return state;
  }
}

export default usersReducer;