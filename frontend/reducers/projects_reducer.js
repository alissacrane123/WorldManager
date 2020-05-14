
import merge from 'lodash/merge';
import { RECEIVE_PROJECT, RECEIVE_PROJECTS, RECEIVE_NEW_PROJECT, RECEIVE_DELETED_PROJECT } from '../actions/project_actions';
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_PMS, RECEIVE_PM, RECEIVE_UPDATED_PM } from '../actions/pm_actions';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PROJECT:
      // return Object.assign(nextState, { [action.payload.project.id]: action.payload.project })
      return action.payload.project;
    case RECEIVE_PROJECTS:
      if (action.payload.projects) {
        return action.payload.projects;
      }
      return state;
    case RECEIVE_NEW_PROJECT:
      return Object.assign(nextState, action.payload.project)
      // return action.payload.project;
    case RECEIVE_DELETED_PROJECT:
      // let projectId = Object.keys(action.payload.project)[0];
      let projectId = action.payload.project.id;
      delete nextState[projectId];
      // debugger
      return nextState;
    case RECEIVE_UPDATED_PM:
      return Object.assign(nextState, action.payload.project)
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return state;
  }
}

export default projectsReducer;