import { connect } from 'react-redux';
import TaskShowItem from './task_show_item';


import { updateTask } from '../../actions/task_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
// debugger
  return {
    currentUserId: state.session.id,
    task: ownProps.task,
  }
}

const mdp = dispatch => ({
  updateTask: (task) => dispatch(updateTask(task)),
  openModal: (modal) => dispatch(openModal(modal))
})

export default connect(msp, mdp)(TaskShowItem);