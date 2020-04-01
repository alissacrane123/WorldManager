import { RECEIVE_ALERTS } from '../actions/alert_actions';


const alertsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALERTS:
      // debugger
      return action.payload.alerts;
    default:
      return state;
  }
}

export default alertsReducer;