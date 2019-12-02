import { combineReducers } from 'redux';

import taskErrorsReducer from './task_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import entitiesErrorsReducer from './entities_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  // task: taskErrorsReducer,
  entities: entitiesErrorsReducer
});

export default errorsReducer;