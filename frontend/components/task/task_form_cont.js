import { connect } from 'react-redux';
import TaskForm from './task_form';
import { createTask } from '../../actions/task_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { timeSince } from '../../helpers/date_helper';

const msp = (state, ownProps) => {
  
  let project = Object.values(state.entities.projects).sort((a, b) => parseInt(b.id) - parseInt(a.id))[0];

  let projectId = ownProps.projectTask ? project.id : null;
  let currentUser = state.entities.users[state.session.id]
  // let userProjects = state.entities.users[state.session.id ]
  
  return {
    path: ownProps.history.location.pathname,
    tasks: Object.values(state.entities.tasks),
    users: Object.values(state.entities.users),
    currentUser: currentUser,
    project: project,
    projects: currentUser.projects,
    projectId: projectId,
    emptyTaskObj: { due_date: new Date(), title: '', priority: 'low',user_id: state.session.id, description: '', status: 'todo', project_id: projectId }
  }
};

const mdp = dispatch => ({
  createTask: (task) => dispatch(createTask(task)),
  closeModal: () => dispatch(closeModal())
});

let TaskFormContainer = connect(msp, mdp)(TaskForm)
export default withRouter(TaskFormContainer);