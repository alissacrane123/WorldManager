import { connect } from 'react-redux';
import Home from './home';

import { fetchTasks, updateTask, fetchSearchTasks } from '../../actions/task_actions';
import { selectUpcomingTasks, selectAcceptedTasks, sortByDueDate, selectTasksBetweenDates } from '../../helpers/helper';
import { formatJavascriptDate, dateInOneWeek} from '../../helpers/date_helper';
import { openModal } from '../../actions/modal_actions';
import { fetchPMs } from '../../actions/pm_actions';
import { updateFilter} from '../../actions/filter_actions';


const msp = (state, ownProps) => {
  let tasks = Object.values(state.entities.tasks);
  let ownedTasks = tasks.filter(task => task.owner === "You" && task.status !== "done");
  let sortedTasks = sortByDueDate(tasks);
  let acceptedTasks = selectAcceptedTasks(state).filter(task => task.status !== 'done' && task.owner === "You" );
  
  let { startDate, endDate } = state.ui.filters.tasks;
  let filterTasks;
  if (startDate && endDate) {
    filterTasks = selectTasksBetweenDates(startDate, endDate, sortedTasks)
  } else {
    filterTasks = sortedTasks
  }
  return {
    currentUser: state.entities.users[state.session.id],
    tasks: tasks,
    sortedTasks: filterTasks,
    ownedTasks: sortByDueDate(ownedTasks),
    pms: Object.values(state.entities.pms),
    upcomingTasks: selectUpcomingTasks(acceptedTasks),
    defaultFilter: {
      start_date: formatJavascriptDate(new Date()),
      end_date: dateInOneWeek(),
      created_at: null,
      user_id: [state.session.id],
      project_id: ['all'],
      status: ["todo", "doing"],
      priority: ["low", "med", "high"],
      label: 'upcoming'
    }
  };
  // tasks: selectTasksDueThisWeek(Object.values(state.entities.tasks))
};

const mdp = dispatch => ({
  fetchTasks: (filter) => dispatch(fetchTasks(filter)),
  fetchSearchTasks: (search, searchVal) => dispatch(fetchSearchTasks(search, searchVal)),
  updateTask: (task)  => dispatch(updateTask(task)),
  openModal: (modal) => dispatch(openModal(modal)),
  fetchPMs: () => dispatch(fetchPMs()),
  updateFilter: (entity, value) => dispatch(updateFilter(entity, value))
});


export default connect(msp, mdp)(Home);