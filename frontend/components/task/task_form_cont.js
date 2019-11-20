import { connect } from 'react-redux';
import TaskForm from './task_form';
import { createTask } from '../../actions/task_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  
  let projectIds = Object.keys(state.entities.projects)
  let projectId;
  
  if (ownProps.location.pathname === '/') {
    projectId = projectIds[projectIds.length - 1]
  } else {
    let arr = ownProps.location.pathname.split('/');
    projectId = Number(arr[arr.length - 1])
  }
  let project = state.entities.projects[projectId]
 
  
  return {
    currentUser: state.entities.users[state.session.id],
    project: project,
    emptyTaskObj: { title: '', email: '', description: '', status: 'Not Started', project_id: project.id }
  }
};

const mdp = dispatch => ({
  createTask: (task) => dispatch(createTask(task)),
  closeModal: () => dispatch(closeModal())
});

let TaskFormContainer = connect(msp, mdp)(TaskForm)
export default withRouter(TaskFormContainer);