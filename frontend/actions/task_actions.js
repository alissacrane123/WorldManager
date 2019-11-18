import * as TaskAPI from '../util/task_api_util';

export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS'

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
})

export const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks
})

export const receiveErrors = errors=> ({
  type: RECEIVE_TASK_ERRORS,
  errors
})


export const fetchTasks = () => dispatch => {
  return (
    TaskAPI.fetchTasks()
      .then(tasks => dispatch(receiveTasks(tasks)),
        err => dispatch(receiveErrors(err.responseJSON)))
  )
}

export const fetchTask = (taskId) => dispatch => {
  return (
    TaskAPI.fetchTask(taskId)
      .then(task => dispatch(receiveTask(task)),
        err => dispatch(receiveErrors(err.responseJSON)))
  )
}

export const createTask = (task) => dispatch => {
  return (
    TaskAPI.createTask(task)
      .then(task => dispatch(receiveTask(task)),
        err => dispatch(receiveErrors(err.responseJSON)))
  )
}

export const updateTask = (task) => dispatch => {
  return (
    TaskAPI.updateTask(task)
      .then(task => dispatch(receiveTask(task)),
            err => dispatch(receiveErrors(err.responseJSON)))
  )
}


