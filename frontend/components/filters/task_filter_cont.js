import { connect } from 'react-redux';

import { selectRecentTasks, selectTasksBetweenDates, selectUpcomingTasks, selectAcceptedTasks, selectOverdueTasks } from '../../helpers/helper';
import { dateInOneWeek, formatJavascriptDate } from '../../helpers/date_helper';


import { updateFilter } from '../../actions/filter_actions';

import { fetchProjects, fetchProject } from '../../actions/project_actions';
import { fetchTasks, updateTask, fetchFilterTasks } from '../../actions/task_actions';
import { openModal } from '../../actions/modal_actions';
 
import TaskFilter from './task_filter'

const msp = (state, ownProps) => {
  let acceptedTasks = selectAcceptedTasks(state);
  let currentUser = state.entities.users[state.session.id];
  
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
    defaultFilter: {
      start_date: startDate,
      end_date: endDate,
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
  fetchFilterTasks: (filter) => dispatch(fetchFilterTasks(filter)),
  updateTask: (task) => dispatch(updateTask(task)),
  openModal: (modal) => dispatch(openModal(modal)),
  updateFilter: (entity, value) => dispatch(updateFilter(entity, value))
})

export default connect(msp, mdp)(TaskFilter);