import { RECEIVE_ALERTS } from '../actions/alert_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_UPDATED_PM } from '../actions/pm_actions';
import { RECEIVE_DELETED_PROJECT } from '../actions/project_actions';

const alertsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALERTS:
      return Object.assign(nextState, action.payload.alerts);
      // return action.payload.alerts;
    case RECEIVE_UPDATED_PM:
      return Object.assign(nextState, action.payload.alerts);
    case RECEIVE_DELETED_PROJECT:
      let alerts = Object.values(state).filter(alert => (
        alert.alertable_type == 'ProjectMembership' && action.payload.project.pm_ids.includes(alert.alertable_id)
      ))
      // debugger
      alerts.forEach(alert => {
        delete nextState[alert.id]
      });
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default alertsReducer;