import React from 'react';
import { connect } from 'react-redux';
import Team from './team';
import { fetchProjects } from '../../actions/project_actions';

const msp = (state, ownProps) => {
  return {
    projects: Object.values(state.entities.projects),
    users: Object.values(state.entities.users)
  }
}


const mdp = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
  }
}

export default connect(msp, mdp)(Team)
