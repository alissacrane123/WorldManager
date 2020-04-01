export const updateAlerts = (ids) => {
  return $.ajax({
    method: 'PATCH',
    url: '/api/alerts/update_all',
    data: { alert_ids: ids }
  })
}

export const fetchAlerts = () =>  {

  return $.ajax({
    method: 'GET',
    url: '/api/alerts'
  })
}