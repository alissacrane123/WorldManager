import { RECEIVE_PMS, RECEIVE_PM } from '../actions/pm_actions';
import { RECEIVE_ALERTS } from '../actions/alert_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';


const pmsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PM:
      let pmId = Object.keys(action.payload.pm)[0];
      delete nextState[pmId];
      return nextState;
    case RECEIVE_PMS:
      return action.pms
    
    // case RECEIVE_DELETED_PROJECT:
    //   let projectId = Object.keys(action.payload.project)[0]
    //   delete nextState[projectId];
    //   return nextState;
    case RECEIVE_ALERTS:
      return action.payload.pms;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default pmsReducer;