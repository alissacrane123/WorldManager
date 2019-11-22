import { connect } from "react-redux";
import Calendar from "./calendar";

import { fetchTasks } from '../../actions/task_actions';

const msp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  tasks: Object.values(state.entities.tasks)
});

const mdp = dispatch => ({
  fetchTasks: (filter, date) => dispatch(fetchTasks(filter, date))
});

export default connect(msp, mdp)(Calendar);
