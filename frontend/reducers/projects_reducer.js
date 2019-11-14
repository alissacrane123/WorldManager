
import merge from 'lodash/merge';
import { RECEIVE_PROJECT, RECEIVE_PROJECTS } from '../actions/project_actions';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PROJECT:
      // return Object.assign(nextState, { [action.payload.project.id]: action.payload.project })
      return action.payload.project;
    case RECEIVE_PROJECTS:
      // debugger
      return action.projects
    default:
      return state;
  }
}

export default projectsReducer;