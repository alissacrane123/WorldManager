import { connect } from 'react-redux';
import Home from './home';

import { fetchTasks, updateTask } from '../../actions/task_actions';
import { formatJavascriptDate, sortByDueDate, selectUpcomingTasks, selectAcceptedTasks, dateInOneWeek} from '../../helpers/helper';
import { openModal } from '../../actions/modal_actions';
import { fetchPMs } from '../../actions/pm_actions';

const msp = (state, ownProps) => {
  let tasks = Object.values(state.entities.tasks);
  let ownedTasks = tasks.filter(task => task.owner === "You" && task.status !== "Finished");
  // debugger
  let acceptedTasks = selectAcceptedTasks(state).filter(task => task.status !== 'Finished' && task.owner === "You" );
  return {
    currentUser: state.entities.users[state.session.id],
    tasks: tasks,
    ownedTasks: sortByDueDate(ownedTasks),
    pms: Object.values(state.entities.pms),
    upcomingTasks: selectUpcomingTasks(acceptedTasks),
    defaultFilter: {
      start_date: formatJavascriptDate(new Date()),
      end_date: dateInOneWeek(),
      created_at: null,
      user_id: [state.session.id],
      project_id: [],
      status: ["Not Started", "In Progress"],
      priority: []
    }
  };
  // tasks: selectTasksDueThisWeek(Object.values(state.entities.tasks))
};

const mdp = dispatch => ({
  fetchTasks: (filter) => dispatch(fetchTasks(filter)),
  updateTask: (task)  => dispatch(updateTask(task)),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchPMs: () => dispatch(fetchPMs())
});


export default connect(msp, mdp)(Home);