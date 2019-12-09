import { RECEIVE_PMS, RECEIVE_PM } from '../actions/pm_actions';

const pmsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PM:
      let pmId = Object.keys(action.payload.pm)[0];
      delete nextState[pmId];
      return nextState;
    case RECEIVE_PMS:
      // debugger
      return action.pms
    
    // case RECEIVE_DELETED_PROJECT:
    //   let projectId = Object.keys(action.payload.project)[0]
    //   delete nextState[projectId];
    //   return nextState;
    default:
      return state;
  }
}

export default pmsReducer;