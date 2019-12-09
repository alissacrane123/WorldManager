import { connect } from "react-redux";
import CalendarMonth from "./calendar_month";

import { fetchTasks, createTask, updateTask } from '../../actions/task_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  // let { day, month, year } = ownProps;
  // let dayStr = day < 10 ? `0${day}` : day;
  // let monthStr = month < 10 ? `0${month}` : month;
  // let date = `${monthStr}/${dayStr}/${year}`;
  return {
    emptyTask: { title: '', status: '', due_date: '', description: '', priority: '' },
    month: ownProps.month,
    year: ownProps.year,
    hideWeekend: ownProps.hideWeekend,
    currentUser: state.entities.users[state.session.id],
    tasks: Object.values(state.entities.tasks).filter(task => task.status !== 'Finished')
  }
};

const mdp = dispatch => ({
  fetchTasks: (filter, date) => dispatch(fetchTasks(filter, date)),
  openModal: (modal) => dispatch(openModal(modal)),
  createTask: (task) => dispatch(createTask(task)),
  updateTask: (task) => dispatch(updateTask(task))
});

export default connect(msp, mdp)(CalendarMonth);
