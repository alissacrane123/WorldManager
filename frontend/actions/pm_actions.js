import * as PMAPI from '../util/pm_api_util';

export const RECEIVE_PM = 'RECEIVE_PM';
export const RECEIVE_PMS = 'RECEIVE_PMS';
export const RECEIVE_PM_ERRORS = 'RECEIVE_PM_ERRORS';

export const receivePM = payload => ({
  type: RECEIVE_PM,
  payload
})

export const receivePMs = pms => ({
  type: RECEIVE_PMS,
  pms
})

export const receiveErrors = errors => {
  return {
    type: RECEIVE_PM_ERRORS,
    errors
  }
}

export const fetchPMs = () => dispatch => {
  return (
    PMAPI.fetchPMs()
      .then(pms => dispatch(receivePMs(pms)),
        err => dispatch(receiveErrors(err.responseJSON)))
  )
}

export const createPM = pm => dispatch => {
  return (
    PMAPI.createPM(pm)
      .then(payload => dispatch(receivePM(payload)),
        err => dispatch(receiveErrors(err.responseJSON)))
  )
}

export const updatePM = pm => dispatch => {
  return (
    PMAPI.updatePM(pm)
      .then(payload => dispatch(receivePM(payload)),
        err => dispatch(receiveErrors(err.responseJSON)))
  )
}
