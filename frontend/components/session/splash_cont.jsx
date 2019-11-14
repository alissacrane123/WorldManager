import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
// import { openModal, closeModal } from '../../actions/modal_actions';

import Splash from './splash';

const msp = (state, ownProps) => {
  // debugger
  return {
    errors: state.errors.session.errors,
    currentUserId: state.session.id 
  };
}

const mdp = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
  };
}


export default withRouter(connect(msp, mdp)(Splash));