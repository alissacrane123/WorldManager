import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import ProjectFeed from './project_feed';

import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchPosts } from '../../actions/post_actions';

const msp = (state, ownProps) => {
  let projectId = ownProps.match.params.projectId;

  return {
    posts: Object.values(state.entities.posts),
    tasks: Object.values(state.entities.tasks),
    project: state.entities.projects[projectId],
    emptyPost: { project_id: projectId, body: '', user_id: state.session.id},
    projectId: projectId,
    currentUser: state.entities.users[state.session.id]
  }
}

const mdp = dispatch => {

  return {
    openModal: (modalType) => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal()),
    fetchPosts: (params) => dispatch(fetchPosts(params))
  }
}

const ProjectFeedContainer = connect(msp, mdp)(ProjectFeed);
export default withRouter(ProjectFeedContainer);