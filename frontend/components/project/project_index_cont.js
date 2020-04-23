import { connect } from 'react-redux';
import ProjectIndex from './project_index';

import { fetchProjects, fetchProject, deleteProject } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';
import { selectAcceptedProjects } from '../../helpers/helper';

const msp = (state, ownProps) => {

  return {
    projects: Object.values(state.entities.projects),
    acceptedProjects: selectAcceptedProjects(state),
    search: ownProps.search
  }
}

const mdp = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  openModal: (modal) => dispatch(openModal(modal)),
  // deleteProject: (projectId) => dispatch(deleteProject(projectId))
})

export default connect(msp, mdp)(ProjectIndex);