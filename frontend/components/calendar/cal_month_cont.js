import { connect } from "react-redux";
import CalendarMonth from "./calendar_month";

import { fetchTasks, createTask, updateTask } from '../../actions/task_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  let { day, month, year } = ownProps;
  let lastDay = new Date(year, month+1, 0).getDate()  ;
  let monthStr = month + 1 < 10 ? `0${month+ 1}` : month+ 1;
  return {
    emptyTask: { title: '', status: '', due_date: '', description: '', priority: '' },
    month: ownProps.month,
    year: ownProps.year,
    hideWeekend: ownProps.hideWeekend,
    currentUser: state.entities.users[state.session.id],
    tasks: Object.values(state.entities.tasks).filter(task => task.status !== 'Finished'),
    defaultFilter: {
      start_date: `${monthStr}/01/${year}`,
      end_date: `${monthStr}/${lastDay}/${year}`,
      created_at: null,
      user_id: [state.session.id],
      project_id: [],
      status: ["Not Started", "In Progress"],
      priority: []
    }
  }
};

const mdp = dispatch => ({
  fetchTasks: (filter) => dispatch(fetchTasks(filter)),
  openModal: (modal) => dispatch(openModal(modal)),
  createTask: (task) => dispatch(createTask(task)),
  updateTask: (task) => dispatch(updateTask(task))
});

export default connect(msp, mdp)(CalendarMonth);
