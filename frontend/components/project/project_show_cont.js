import { connect } from 'react-redux';
import ProjectShow from './project_show';

import { fetchProjects, fetchProject } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId],
  projectId: ownProps.match.params.projectId
})

const mdp = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  openModal: (modal) => dispatch(openModal(modal))
})

export default connect(msp, mdp)(ProjectShow);