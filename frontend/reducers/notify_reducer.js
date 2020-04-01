import { RECEIVE_NOTIFICATIONS } from '../actions/notify_actions';


const notifyReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_NOTIFICATIONS:
      // debugger
      return action.payload.notifications;
    default:
      return state;
  }
}

export default notifyReducer;