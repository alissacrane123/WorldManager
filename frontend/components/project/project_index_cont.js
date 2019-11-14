import { connect } from 'react-redux';
import ProjectIndex from './project_index';

import { fetchProjects, fetchProject } from '../../actions/project_actions';

const msp = state => ({
  projects: Object.values(state.entities.projects)
})

const mdp = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchProject: (projectId) => dispatch(fetchProject(projectId))
})

export default connect(msp, mdp)(ProjectIndex);