import React from 'react';
import { connect } from 'react-redux';
import ReminderIndex from './reminder_index';
import { fetchReminders } from '../../actions/task_actions';
import { selectReminders } from '../../helpers/helper';

const msp = (state, ownProps) => {
  return {
    reminders: selectReminders(state.entities.tasks),
    projects: Object.values(state.entities.projects),
    users: Object.values(state.entities.users),
    pms: Object.values(state.entities.pms)
  }
}


const mdp = dispatch => {
  return {
    fetchReminders: (search, val) => dispatch(fetchReminders(search, val)),
  }
}

export default connect(msp, mdp)(ReminderIndex)
