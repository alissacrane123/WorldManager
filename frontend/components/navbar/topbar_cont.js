import { connect } from "react-redux";
import Topbar from "./topbar";

import { login, signup, logout } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchAlerts } from '../../actions/alert_actions';

const msp = (state, ownProps) => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.id],
    newPms: Object.values(state.entities.pms).filter(pm => !pm.accepted),
    completedPms: Object.values(state.entities.pms).filter(pm => pm.accepted),
    pathname: ownProps.history.location.pathname
  };
};

const mdp = dispatch => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    logout: () => dispatch(logout()),
    openModal: modalType => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal()),
    fetchAlerts: () => dispatch(fetchAlerts())
  };
};

export default connect(msp, mdp)(Topbar);
