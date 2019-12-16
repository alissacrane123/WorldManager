import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PostForm from './post_form';

import { login, signup, logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createPost } from '../../actions/post_actions';
import { createPM } from '../../util/project_api_util';

const msp = (state, ownProps) => {
  let projectId = Object.keys(state.entities.projects)[0]

  return {
    emptyPost: { project_id: projectId, body: '', user_id: state.session.id },
    projectId: projectId,
    currentUser: state.entities.users[state.session.id]
  }
}

const mdp = dispatch => {

  return {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    logout: () => dispatch(logout()),
    openModal: (modalType) => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal()),
    createPost: (post) => dispatch(createPost(post))
  }
}

const PostFormContainer = connect(msp, mdp)(PostForm);
export default withRouter(PostFormContainer);