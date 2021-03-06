import { connect } from 'react-redux';
import TaskShow from './task_show';
import { selectRecentTasks, selectTasksBetweenDates,selectUpcomingTasks, projectTasks, selectOverdueTasks, selectProjectTasks } from '../../helpers/helper';
import { updateFilter } from '../../actions/filter_actions';
import { formatJavascriptDate, dateInOneWeek } from '../../helpers/date_helper';
import { fetchProjects, fetchProject } from '../../actions/project_actions';

import { fetchTasks, updateTask } from '../../actions/task_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  let acceptedTasks = Object.values(state.entities.tasks)

  if (state.ui.filters.tasks) {

    let { startDate, endDate} = state.ui.filters.tasks;
    

    if (startDate && endDate) {
      acceptedTasks = selectTasksBetweenDates(startDate, endDate, acceptedTasks)
    } else {
      // filterTasks = acceptedTasks;
      startDate = formatJavascriptDate(new Date());
      endDate = dateInOneWeek();
    }
  }
  let projectTasks = selectProjectTasks(acceptedTasks, state)
  return {
    currentUserId: state.session.id,
    userFilter: state.ui.filters.tasks,
    users: Object.values(state.entities.users),
    // adminAccess: Object.values(state.entities.projects)[0].adminAccess,
    allTasks: acceptedTasks,
    recentTasks: selectRecentTasks(acceptedTasks),
    upcomingTasks: selectUpcomingTasks(acceptedTasks),
    overdueTasks: selectOverdueTasks(acceptedTasks),
    projectTasks: projectTasks
    // users: projectMemberSelector(state)
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

export default connect(msp, mdp)(TaskShow);