import { connect } from "react-redux";
import Topbar from "./topbar";

import { login, signup, logout } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchAlerts, updateAlerts } from '../../actions/alert_actions';

import { selectNewAlerts } from '../../helpers/alert_helper';

const msp = (state, ownProps) => {
  let newPms = Object.values(state.entities.pms).filter(pm => !pm.accepted);
  let completedPms = Object.values(state.entities.pms).filter(pm => pm.accepted);

  let newAlerts = selectNewAlerts(Object.values(state.entities.alerts));
  return {
    currentUser: state.entities.users[state.session.id],
    newPms: newPms,
    completedPms: completedPms,
    newAlerts: newAlerts,
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
    fetchAlerts: () => dispatch(fetchAlerts()),
    updateAlerts: (ids) => dispatch(updateAlerts(ids))
  };
};

export default connect(msp, mdp)(Topbar);
