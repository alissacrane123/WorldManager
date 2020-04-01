import * as notifyAPI from '../util/notify_api_util';

export const RECEIVE_NOTIFICATIONS = 'RECEIVE_NOTIFICATIONS';

export const receiveNotifications =  (payload) => {
  return  {
    type: RECEIVE_NOTIFICATIONS,
    payload
  }
}

export const fetchNotifications = () => dispatch => {
  return (
    notifyAPI.fetchNotifications()
      .then(payload => dispatch(receiveNotifications(payload)))
  )
}