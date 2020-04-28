export const selectNewAlerts = (alerts) => {
  return alerts.filter(alert => !alert.checked)
}

export const selectAlertTasks = (state) => {
  let tasks = Object.values(state.entities.tasks);
  let alerts = Object.values(state.entities.alerts).filter(alert => alert.alertable_type == 'Task')
  let taskIds = alerts.map(a => a.alertable_id)
  // let taskIds = 

  let alertTasks = tasks.filter(task => taskIds.includes(task.id))

  return alertTasks;
}