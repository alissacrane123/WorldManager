import { connect } from 'react-redux';
import Home from './home';

import { fetchTasks, updateTask } from '../../actions/task_actions';
import { sortByDueDate} from '../../helpers/helper';
import { openModal } from '../../actions/modal_actions';
import { fetchPMs } from '../../actions/pm_actions';

const msp = (state, ownProps) => {
  let tasks = Object.values(state.entities.tasks);
  let ownedTasks = tasks.filter(task => task.owner === "You" && task.status !== "Finished");
  return {
    currentUser: state.entities.users[state.session.id],
    tasks: tasks,
    ownedTasks: sortByDueDate(ownedTasks),
    pms: Object.values(state.entities.pms)
  }
  // tasks: selectTasksDueThisWeek(Object.values(state.entities.tasks))
};

const mdp = dispatch => ({
  fetchTasks: (filter, date) => dispatch(fetchTasks(filter, date)),
  updateTask: (task)  => dispatch(updateTask(task)),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchPMs: () => dispatch(fetchPMs())
});


export default connect(msp, mdp)(Home);