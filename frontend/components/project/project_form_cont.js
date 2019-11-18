import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { createProject } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';


const msp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],

});

const mdp = dispatch => ({
  createProject: (project, pm) => dispatch(createProject(project, pm)),
  openModal: (modal) => dispatch(openModal(modal))
});


export default connect(msp, mdp)(ProjectForm);