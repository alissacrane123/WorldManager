export const selectNewAlerts = (alerts) => {
  return alerts.filter(alert => !alert.checked)
}