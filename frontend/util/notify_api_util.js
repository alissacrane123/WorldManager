export const updateNotifications = (ids) => {
  return $.ajax({
    method: 'PATCH',
    url: '/api/notifications/update_all',
    data: { notif_ids: ids }
  })
}

export const fetchNotifications = () =>  {

  return $.ajax({
    method: 'GET',
    url: '/api/notifications'
  })
}