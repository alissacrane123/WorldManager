import { connect } from 'react-redux';
import TaskForm from './task_form';
import { createTask } from '../../actions/task_actions';



const msp = (state, ownProps) => {
  
  let projectIds = Object.keys(state.entities.projects)
  let projectId = projectIds[projectIds.length - 1]
  let project = state.entities.projects[projectId]
 
  return {
    currentUser: state.entities.users[state.session.id],
    project: project,
    emptyTaskObj: { title: '', email: '', description: '', status: 'Not Started', project_id: project.id }
  }
};

const mdp = dispatch => ({
  createTask: (task) => dispatch(createTask(task))
});


export default connect(msp, mdp)(TaskForm);