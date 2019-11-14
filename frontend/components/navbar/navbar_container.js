import { connect } from 'react-redux';
import Navbar from './navbar';

import { login, signup, logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {

  return {
    currentUser: state.entities.users[state.session.id] 
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

export default connect(msp, mdp)(Navbar);