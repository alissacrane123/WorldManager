import * as TaskAPI from '../util/task_api_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
})

export const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks
})

export const fetchTasks = () => dispatch => {
  return (
    TaskAPI.fetchTasks().then(tasks => dispatch(receiveTasks(tasks)))
  )
}

export const fetchTask = (taskId) => dispatch => {
  return (
    TaskAPI.fetchTask(taskId).then(task => dispatch(receiveTask(task)))
  )
}

export const createTask = (task) => dispatch => {
  return (
    TaskAPI.createTask(task).then(task => dispatch(receiveTask(task)))
  )
}
