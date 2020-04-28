import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PROJECT, RECEIVE_PROJECTS } from '../actions/project_actions';
import { RECEIVE_UPDATED_PM, RECEIVE_NEW_PM}from '../actions/pm_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(nextState, { [action.user.id]: action.user });
    case RECEIVE_PROJECT:
      // take away because now creating PM - maybe not
      return Object.assign(nextState, action.payload.users);
    case RECEIVE_NEW_PM:
      return Object.assign(nextState, { [action.payload.user.id]: action.payload.user})
    case RECEIVE_PROJECTS:
      if (action.payload.users) {
        return Object.assign(nextState, action.payload.users);
      }
      return state;
    case LOGOUT_CURRENT_USER:
      return {};
    default: 
      return state;
  }
}

export default usersReducer;