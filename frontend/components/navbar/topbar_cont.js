import { connect } from "react-redux";
import Topbar from "./topbar";

import { login, signup, logout } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchNotifications } from '../../actions/notify_actions';

const msp = (state, ownProps) => {
  
  return {
    currentUser: state.entities.users[state.session.id],
    newPms: Object.values(state.entities.pms).filter(pm => !pm.request_status),
    completedPms: Object.values(state.entities.pms).filter(pm => pm.request_status)
  };
};

const mdp = dispatch => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    logout: () => dispatch(logout()),
    openModal: modalType => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal()),
    fetchNotifications: () => dispatch(fetchNotifications())
  };
};

export default connect(msp, mdp)(Topbar);
