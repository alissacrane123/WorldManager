import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { createProject } from '../../actions/project_actions';



const msp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],

});

const mdp = dispatch => ({
  createProject: (project) => dispatch(createProject(project))
});


export default connect(msp, mdp)(ProjectForm);