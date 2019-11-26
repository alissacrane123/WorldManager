
export const fetchTasks = (filter, date) => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: '/api/tasks',
    data: { filter, date }
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
  // debugger
  return $.ajax({
    method: 'PATCH',
    url: `/api/tasks/${task.id}`,
    data: { task }
  })
}

export const deleteTask = (taskId) => {
  // debugger
  return $.ajax({
    method: "DELETE",
    url: `/api/tasks/${taskId}`
  });
}