import { connect } from 'react-redux';
import TaskForm from './task_form';
import { createTask } from '../../actions/task_actions';



const msp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],

});

const mdp = dispatch => ({

});


export default connect(msp, mdp)(TaskForm);