import { RECEIVE_TASK_ERRORS } from '../actions/task_actions';
import { RECEIVE_PROJECT_ERRORS } from '../actions/project_actions'
import { RECEIVE_TASK, RECEIVE_TASKS } from '../actions/task_actions'; 
import { RECEIVE_PROJECT, RECEIVE_PROJECTS } from '../actions/project_actions'; 

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return action.errors;
    case RECEIVE_TASK_ERRORS:
      return action.errors
    case RECEIVE_TASK:
      return [];
    case RECEIVE_PROJECT:
      return [];
    case RECEIVE_TASKS:
      return [];
    case RECEIVE_PROJECTS:
      return [];
    default:
      return state;
  }
};