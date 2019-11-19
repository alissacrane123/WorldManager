import { connect } from 'react-redux';
import TaskIndex from './task_index';
import { updateUserFilter } from '../../actions/filter_actions';

import { fetchProjects, fetchProject } from '../../actions/project_actions';
import { updateTask } from '../../actions/task_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  let tasks = Object.values(state.entities.tasks)
  return {
    notStarted: tasks.filter(task => task.status === 'Not Started'),
    inProgress: tasks.filter(task => task.status === 'In Progress'),
    finished: tasks.filter(task => task.status === 'Finished'),
    currentUserId: state.session.id,
    userFilter: state.ui.filters.tasks.user,
    users: Object.values(state.entities.users),
    adminAccess: Object.values(state.entities.projects)[0].adminAccess
    // users: projectMemberSelector(state)
  }
}

const mdp = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  updateTask: (task) => dispatch(updateTask(task)),
  openModal: (modal) => dispatch(openModal(modal)),
  updateFilter: (entity, value) => dispatch(updateUserFilter(entity, value))
})

export default connect(msp, mdp)(TaskIndex);