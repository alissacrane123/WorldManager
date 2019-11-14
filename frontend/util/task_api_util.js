
export const fetchTasks = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/tasks'
  })
}

export const fetchTask = (taskId) => {
  return $.ajax({
    method: 'GET',
    url: `api/tasks/${taskId}`
  })
}

export const createTask = (task) => {
  return $.ajax({
    method: 'POST',
    url: '/api/tasks',
    data: { task }
  })
}