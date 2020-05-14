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

export const replaceAlertsWithAlertItems = (alerts, state) => {
  let items = alerts.map(alert => {
    if (alert.alertable_type == "Task") {
      return state.entities.tasks[alert.alertable_id];
    } else {
      return state.entities.pms[alert.alertable_id];
    }
  })
  return items;
}