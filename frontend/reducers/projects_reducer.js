
import merge from 'lodash/merge';
import { RECEIVE_PROJECT, RECEIVE_PROJECTS, RECEIVE_NEW_PROJECT, RECEIVE_DELETED_PROJECT } from '../actions/project_actions';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PROJECT:
      // return Object.assign(nextState, { [action.payload.project.id]: action.payload.project })
      return action.payload.project;
    case RECEIVE_PROJECTS:
      // debugger
      return action.payload.projects
    case RECEIVE_NEW_PROJECT:
      return Object.assign(nextState, action.payload.project)
      // return action.payload.project;
    case RECEIVE_DELETED_PROJECT:
      let projectId = Object.keys(action.payload.project)[0]
      delete nextState[projectId];
      // debugger
      return nextState;
    default:
      return state;
  }
}

export default projectsReducer;