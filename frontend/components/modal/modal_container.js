import React from 'react';
import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal, openModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';
import { updateTask } from '../../actions/task_actions';
import { createPM } from '../../actions/project_actions';
import { selectNewProjectId } from '../../helpers/helper';

const mapStateToProps = (state, ownProps) => {

  let projects = Object.keys(state.entities.projects).sort((a, b) => (
    parseInt(b) - parseInt(a)
  ))
  let projectId = projects[0];
  let pms = Object.values(state.entities.pms).filter(pm => pm.project_id == projectId)
  let pmUserIds = pms.map(pm => pm.user_id )
  let users = Object.values(state.entities.users);
  users = users.filter(user => user.id != state.session.id);
  users = users.filter(user => pmUserIds.includes(user.id));
  // debugger
  return {
    modal: state.ui.modal,
    users: users,
    // users: Object.values(state.entities.users),
    pms: Object.values(state.entities.pms),
    currentUserId: state.session.id,
    tasks: state.entities.tasks,
    projectId: projects[0],
    errors: state.errors.entities
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