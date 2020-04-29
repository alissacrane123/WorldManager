import { RECEIVE_PMS, RECEIVE_PM, RECEIVE_UPDATED_PM, RECEIVE_NEW_PM } from '../actions/pm_actions';
import { RECEIVE_DELETED_PROJECT} from '../actions/project_actions';
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
      // might be same as above
    case RECEIVE_NEW_PM:
      // debugger
      return Object.assign(nextState, action.payload.pm)
    case RECEIVE_UPDATED_PM:
      // let pmIdd = Object.keys(action.payload.pm)[0];
      // delete nextState[pmIdd];
      // return nextState;
      return Object.assign(nextState, action.payload.pm)
    case RECEIVE_PMS:
      return action.pms
    
    // case RECEIVE_DELETED_PROJECT:
    //   let projectId = Object.keys(action.payload.project)[0]
    //   delete nextState[projectId];
    //   return nextState;
    case RECEIVE_ALERTS:
      if (action.payload.pms) {
        // return action.payload.pms;
        return Object.assign(nextState, action.payload.pms)
      }
      return state;
    case RECEIVE_DELETED_PROJECT:
      action.payload.project.pm_ids.forEach(id => {
        delete nextState[id]
      });
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default pmsReducer;