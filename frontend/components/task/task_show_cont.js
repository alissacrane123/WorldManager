import { connect } from 'react-redux';
import TaskShow from './task_show';
import { selectRecentTasks, selectUpcomingTasks, projectTasks, selectOverdueTasks, selectProjectTasks } from '../../helpers/helper';
import { updateUserFilter } from '../../actions/filter_actions';

import { fetchProjects, fetchProject } from '../../actions/project_actions';

import { fetchTasks, updateTask } from '../../actions/task_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  // let tasks = Object.values(state.entities.tasks).filter(task => task.status !== 'Finished');
  let acceptedTasks = Object.values(state.entities.tasks)
  // let acceptedTasks = selectAcceptedTasks(state).filter(task => task.status !== 'Finished');
  let recentTasks = [];
  let projectTasks = selectProjectTasks(acceptedTasks)
  // debugger
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
  updateFilter: (entity, value) => dispatch(updateUserFilter(entity, value))
})

export default connect(msp, mdp)(TaskShow);