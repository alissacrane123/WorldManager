import { RECEIVE_TASK_ERRORS, RECEIVE_TASK, RECEIVE_TASKS } from '../actions/task_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASK_ERRORS:
      return action.errors;
    case RECEIVE_TASK:
      return [];
    case RECEIVE_TASKS:
      return [];
    default:
      return state;
  }
};