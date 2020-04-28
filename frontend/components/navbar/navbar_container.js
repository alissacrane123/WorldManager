import { connect } from 'react-redux';
import Navbar from './navbar';

import { login, signup, logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { updateFilter } from '../../actions/filter_actions';

const msp = (state, ownProps) => {

  return {
    currentUser: state.entities.users[state.session.id],
    pms: Object.values(state.entities.pms),
    // defaultFilter: {
    //   start_date: startDate,
    //   end_date: endDate,
    //   created_at: null,
    //   user_id: [state.session.id],
    //   project_id: ['all'],
    //   unassigned: true,
    //   status: ["todo", "doing"],
    //   priority: ["low", "med", "high"]
    // }
  }
}

const mdp = dispatch => {

  return {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    logout: () => dispatch(logout()),
    openModal: (modalType) => dispatch(openModal(modalType)),
    updateFilter: (entity, value) => dispatch(updateFilter(entity, value)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(Navbar);