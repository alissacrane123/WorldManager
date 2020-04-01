import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import projectsReducer from './projects_reducer';
import tasksReducer from './tasks_reducer';
import pmsReducer from './pm_reducer';
import postsReducer from './posts_reducer';
import alertsReducer from './alerts_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  tasks: tasksReducer,
  posts:postsReducer,
  pms: pmsReducer,
  alerts: alertsReducer
});

export default entitiesReducer;