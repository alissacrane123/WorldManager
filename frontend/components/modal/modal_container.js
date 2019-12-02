import React from 'react';
import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal, openModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';
import { updateTask } from '../../actions/task_actions';
import { createPM } from '../../actions/project_actions';
import { selectNewProjectId } from '../../helpers/helper';

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.modal,
    users: Object.values(state.entities.users),
    currentUserId: state.session.id,
    tasks: state.entities.tasks,
    projectId: Object.keys(state.entities.projects)[0]
    // projectId: selectNewProjectId(state.entities.projects)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    login: (user) => dispatch(login(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    updateTask: (task) => dispatch(updateTask(task)),
    createPM: (pm) => dispatch(createPM(pm))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);