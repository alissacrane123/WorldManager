import React from 'react';
import { connect } from 'react-redux';
import PmIndex from './pm_index';
import { fetchPMs, updatePM } from '../../actions/pm_actions';

const msp = (state, ownProps) => {
  return {
    projects: Object.values(state.entities.projects),
    users: Object.values(state.entities.users),
    pms: Object.values(state.entities.pms)
  }
}


const mdp = dispatch => {
  return {
    fetchPMs: () => dispatch(fetchPMs()),
    updatePM: (pm) => dispatch(updatePM(pm))
  }
}

export default connect(msp, mdp)(PmIndex)
