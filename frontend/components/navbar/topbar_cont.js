import { connect } from "react-redux";
import Topbar from "./topbar";

import { login, signup, logout } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchAlerts } from '../../actions/alert_actions';

const msp = (state, ownProps) => {
  let newPms = Object.values(state.entities.pms).filter(pm => !pm.accepted);
  let completedPms = Object.values(state.entities.pms).filter(pm => pm.accepted);
  return {
    currentUser: state.entities.users[state.session.id],
    newPms: newPms,
    completedPms: completedPms,
    allPms: newPms.concat(completedPms),
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
