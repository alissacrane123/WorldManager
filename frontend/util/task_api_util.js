
export const fetchTasks = (filter) => {
  // debugger
  return $.ajax({
    method: 'GET',
    url: '/api/tasks',
    data: filter
  })
}
// export const fetchTasks = (filter, date) => {
  
//   return $.ajax({
//     method: 'GET',
//     url: '/api/tasks',
//     data: { filter, date }
//   })
// }

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

export const deleteTask = (taskId) => {
  
  return $.ajax({
    method: "DELETE",
    url: `/api/tasks/${taskId}`
  });
}