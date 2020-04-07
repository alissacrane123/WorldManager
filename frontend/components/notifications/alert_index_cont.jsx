import React from 'react';
import { connect } from 'react-redux';
import AlertIndex from './alert_index';
import { fetchPMs, updatePM } from '../../actions/pm_actions';
import { sortByUpdatedAt } from '../../helpers/helper';

const msp = (state, ownProps) => {
  let pms = Object.values(state.entities.pms);
  pms = sortByUpdatedAt(pms)
  // debugger
  return {
    currentUserId: state.session.id,
    projects: Object.values(state.entities.projects),
    users: Object.values(state.entities.users),
    // pms: Object.values(state.entities.pms),
    pms: pms,
    newPms: Object.values(state.entities.pms).filter(pm => !pm.accepted),
    completedPms: Object.values(state.entities.pms).filter(
      pm => pm.accepted
    )
  };
}

const mdp = dispatch => {
  return {
    fetchPMs: () => dispatch(fetchPMs()),
    updatePM: (pm) => dispatch(updatePM(pm))
  }
}

export default connect(msp, mdp)(AlertIndex)
