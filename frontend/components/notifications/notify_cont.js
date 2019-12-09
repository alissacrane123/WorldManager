import React from 'react';
import { connect } from 'react-redux';
import Notify from './notify';
import { fetchPMs } from '../../actions/pm_actions';

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
  }
}

export default connect(msp, mdp)(Notify)
