export const selectNewAlerts = (alerts) => {
  return alerts.filter(alert => !alert.checked)
}

export const selectAlertTasks = (state) => {
  let tasks = Object.values(state.entities.tasks);
  let alerts = Object.values(state.entities.alerts).filter(alert => alert.alertable_type == 'Task')
  let taskIds = alerts.map(a => a.alertable_id)

  let alertTasks = tasks.filter(task => taskIds.includes(task.id))

  return alertTasks;
}

export const replaceAlertsWithAlertItems = (alerts, state) => {
  let items = alerts.map(alert => {
    if (alert.alertable_type == "Task") {
      let task = state.entities.tasks[alert.alertable_id];
      task["updatedAt"] = alert.updated_at;
      task["new"] = !alert.checked
      return task;
    } else {
      let pm = state.entities.pms[alert.alertable_id];
      pm["new"] = !alert.checked;
      pm["updatedAt"] = alert.updated_at;
      return pm;
    }
  })
  return items;
}