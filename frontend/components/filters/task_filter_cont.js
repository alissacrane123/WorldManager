import { connect } from 'react-redux';

import { selectRecentTasks, selectUpcomingTasks, selectAcceptedTasks, selectOverdueTasks } from '../../helpers/helper';
import { dateInOneWeek, formatJavascriptDate } from '../../helpers/date_helper';


import { updateUserFilter } from '../../actions/filter_actions';

import { fetchProjects, fetchProject } from '../../actions/project_actions';
import { fetchTasks, updateTask } from '../../actions/task_actions';
import { openModal } from '../../actions/modal_actions';
 
// import TaskFilter from './task_filter';
import TaskFilter from './task_filter'

const msp = (state, ownProps) => {
  let acceptedTasks = selectAcceptedTasks(state);
  // let acceptedTasks = selectAcceptedTasks(state).filter(task => task.status !== 'Finished');
  let recentTasks = [];
  let currentUser = state.entities.users[state.session.id];
  let projectIds = currentUser.projects.map(project => project.id);
  // let projectIds = Object.keys(state.entities.projects);
  
  return {
    currentUser: currentUser,
    users: Object.values(state.entities.users),
    allTasks: acceptedTasks,
    recentTasks: selectRecentTasks(acceptedTasks),
    upcomingTasks: selectUpcomingTasks(acceptedTasks),
    overdueTasks: selectOverdueTasks(acceptedTasks),
    defaultFilter: {
      start_date: formatJavascriptDate(new Date()),
      end_date: dateInOneWeek(),
      created_at: null,
      user_id: [state.session.id],
      project_id: 'all',
      unnassigned: true,
      status: ["todo", "doing"],
      priority: ["low", "med", "high"]
    }
  }
}

const mdp = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  fetchTasks: (filter) => dispatch(fetchTasks(filter)),
  updateTask: (task) => dispatch(updateTask(task)),
  openModal: (modal) => dispatch(openModal(modal)),
  updateFilter: (entity, value) => dispatch(updateUserFilter(entity, value))
})

export default connect(msp, mdp)(TaskFilter);