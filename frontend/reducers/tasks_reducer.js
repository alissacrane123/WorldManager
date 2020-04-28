

import { RECEIVE_TASK, RECEIVE_REMINDERS, RECEIVE_TASKS, RECEIVE_DELETED_TASK, RECEIVE_FILTER_TASKS } from '../actions/task_actions';
import { RECEIVE_PROJECT, RECEIVE_DELETED_PROJECT } from '../actions/project_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALERTS } from '../actions/alert_actions';
import { RECEIVE_UPDATED_PM } from '../actions/pm_actions';

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_UPDATED_PM:
      return Object.assign(nextState, action.payload.tasks)
    case RECEIVE_REMINDERS:
      return Object.assign(nextState, action.reminders)
    case RECEIVE_TASK:
      return Object.assign(nextState, action.task);
    case RECEIVE_TASKS:
      // return Object.assign(nextState, action.tasks)
      return action.tasks;
    case RECEIVE_PROJECT:
      if (!action.payload.tasks) return {};
      return Object.assign({}, nextState, action.payload.tasks)
    case RECEIVE_DELETED_TASK:
      let taskId = Object.keys(action.task)[0]
      delete nextState[taskId];
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_ALERTS:
      return Object.assign({}, nextState, action.payload.tasks)
    // case RECEIVE_DELETED_PROJECT:
    case RECEIVE_DELETED_PROJECT:
      let tasks = Object.values(state);
      let projectId = Object.keys(action.payload.project)[0]
      let ids = tasks.filter(task => task.project_id == projectId).map(task => task.id);
      ids.forEach(id => {
        delete nextState[id]
      });
      return nextState;
    case RECEIVE_FILTER_TASKS:
      // debugger
      return action.tasks;
    default:
      return state;
  }
}

export default tasksReducer;