import * as alertAPI from '../util/alert_api_util';

export const RECEIVE_ALERTS = 'RECEIVE_ALERTS';

export const receiveAlerts =  (payload) => {
  return  {
    type: RECEIVE_ALERTS,
    payload
  }
}

export const fetchAlerts = () => dispatch => {
  return (
    alertAPI.fetchAlerts()
      .then(payload => dispatch(receiveAlerts(payload)))
  )
}


export const updateAlerts = (ids) => dispatch => {
  return (
    alertAPI.updateAlerts(ids)
      .then(payload => dispatch(receiveAlerts(payload)))
  )
}

