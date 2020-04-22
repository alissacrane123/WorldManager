import { connect } from 'react-redux';

import { selectRecentTasks, selectTasksBetweenDates, selectUpcomingTasks, selectAcceptedTasks, selectOverdueTasks } from '../../helpers/helper';
import { dateInOneWeek, formatJavascriptDate } from '../../helpers/date_helper';


import { updateFilter } from '../../actions/filter_actions';

import { fetchProjects, fetchProject } from '../../actions/project_actions';
import { fetchTasks, updateTask } from '../../actions/task_actions';
import { openModal } from '../../actions/modal_actions';
 
import TaskFilter from './task_filter'

const msp = (state, ownProps) => {
  let acceptedTasks = selectAcceptedTasks(state);
  let recentTasks = [];
  let currentUser = state.entities.users[state.session.id];
  let projectIds = currentUser.projects.map(project => project.id);
  
  let { startDate, endDate } = state.ui.filters.tasks;
  let filterTasks;
  if (startDate && endDate) {
    filterTasks = selectTasksBetweenDates(startDate, endDate, acceptedTasks)
  } else {
    filterTasks = acceptedTasks;
    startDate = formatJavascriptDate(new Date());
    endDate = dateInOneWeek();
  }
  // debugger
  return {
    currentUser: currentUser,
    currentUserProjects: currentUser.projects,
    // users: Object.values(state.entities.users),
    // allTasks: acceptedTasks,
    // filterStart: startDate,
    // filterEnd: endDate,
    // recentTasks: selectRecentTasks(acceptedTasks),
    // upcomingTasks: selectUpcomingTasks(acceptedTasks),
    // overdueTasks: selectOverdueTasks(acceptedTasks),
    defaultFilter: {
      start_date: startDate,
      end_date: endDate,
      // start_date: formatJavascriptDate(new Date()),
      // end_date: dateInOneWeek(),
      created_at: null,
      user_id: [state.session.id],
      project_id: ['all'],
      unassigned: true,
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
  updateFilter: (entity, value) => dispatch(updateFilter(entity, value))
})

export default connect(msp, mdp)(TaskFilter);