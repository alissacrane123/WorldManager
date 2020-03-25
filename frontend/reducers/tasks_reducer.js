
import merge from 'lodash/merge';
import { RECEIVE_TASK, RECEIVE_TASKS, RECEIVE_DELETED_TASK } from '../actions/task_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

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
    case RECEIVE_DELETED_TASK:
      // debugger
      let taskId = Object.keys(action.task)[0]
      delete nextState[taskId];
      // debugger
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default tasksReducer;