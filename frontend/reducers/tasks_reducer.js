
import merge from 'lodash/merge';
import { RECEIVE_TASK, RECEIVE_TASKS } from '../actions/task_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TASK:
      return Object.assign(nextState, action.task);
    case RECEIVE_TASKS:
      return action.tasks;
    case RECEIVE_PROJECT:
      if (!action.payload.tasks) return {};
      return action.payload.tasks;
    default:
      return state;
  }
}

export default tasksReducer;