import { connect } from "react-redux";
import Calendar from "./calendar";

import { fetchTasks, createTask } from '../../actions/task_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  tasks: Object.values(state.entities.tasks).filter(task => task.status !== 'Finished')
});

const mdp = dispatch => ({
  fetchTasks: (filter) => dispatch(fetchTasks(filter)),
  openModal: (modal) => dispatch(openModal(modal)),
  createTask: (task) => dispatch(createTask(task))
});

export default connect(msp, mdp)(Calendar);
