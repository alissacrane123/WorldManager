import { connect } from 'react-redux';
import ProjectFeed from './project_feed';

import { login, signup, logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  let projectId = Object.keys(state.entities.projects)[0];

  return {
    posts: Object.values(state.entities.posts),
    emptyPost: { project_id: projectId, body: ''}
  }
}

const mdp = dispatch => {

  return {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    logout: () => dispatch(logout()),
    openModal: (modalType) => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(ProjectFeed);