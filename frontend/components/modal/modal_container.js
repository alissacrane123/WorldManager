import React from 'react';
import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';
import { updateTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.modal,
    tasks: state.entities.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    login: (user) => dispatch(login(user)),
    updateTask: (task) => dispatch(updateTask(task))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);