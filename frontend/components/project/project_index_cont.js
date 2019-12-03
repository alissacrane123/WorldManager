import { connect } from 'react-redux';
import ProjectIndex from './project_index';

import { fetchProjects, fetchProject, deleteProject } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';

const msp = state => ({
  projects: Object.values(state.entities.projects)
})

const mdp = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  openModal: (modal) => dispatch(openModal(modal)),
  // deleteProject: (projectId) => dispatch(deleteProject(projectId))
})

export default connect(msp, mdp)(ProjectIndex);