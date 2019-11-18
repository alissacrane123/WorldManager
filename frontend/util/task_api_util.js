
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

export const createTask = (tasks) => {
  // debugger
  return $.ajax({
    method: 'POST',
    url: '/api/tasks',
    data: { tasks: tasks }
    // data: { tasks: JSON.stringify(data) }
  })
}

export const updateTask = (task) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/tasks/${task.id}`,
    data: { task }
  })
}