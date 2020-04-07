import { connect } from 'react-redux';
import TaskIndex from './task_index';
import { updateFilter } from '../../actions/filter_actions';

import { fetchProjects, fetchProject } from '../../actions/project_actions';
import { updateTask, deleteTask } from '../../actions/task_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  let tasks = Object.values(state.entities.tasks);
  let projectId = Object.keys(state.entities.projects)[0];
  let notStarted = tasks.filter(task => task.status === 'todo' && task.project_id == projectId);
  let inProgress = tasks.filter(task => task.status === 'doing' && task.project_id == projectId);
  let done = tasks.filter(task => task.status === 'done' && task.project_id == projectId);
  return {
    notStarted: notStarted,
    inProgress: inProgress,
    done: done,
    currentUserId: state.session.id,
    userFilter: state.ui.filters.tasks.user,
    users: Object.values(state.entities.users),
    adminAccess: true
  }
}

const mdp = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  updateTask: (task) => dispatch(updateTask(task)),
  openModal: (modal) => dispatch(openModal(modal)),
  deleteTask: (taskId) => dispatch(deleteTask(taskId)),
  updateFilter: (entity, value) => dispatch(updateFilter(entity, value))
})

export default connect(msp, mdp)(TaskIndex);