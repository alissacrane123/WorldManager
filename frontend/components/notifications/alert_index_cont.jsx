import React from 'react';
import { connect } from 'react-redux';
import AlertIndex from './alert_index';
import { fetchPMs, updatePM } from '../../actions/pm_actions';
import { sortByUpdatedAt } from '../../helpers/helper';

import { selectAlertTasks } from '../../helpers/alert_helper';

const msp = (state, ownProps) => {
  let alerts = Object.values(state.entities.alerts);
  let pms = Object.values(state.entities.pms);

  pms = pms.filter(pms => pms.accepted || pms.user_id == state.session.id)
  pms = sortByUpdatedAt(pms)

  let newAlerts = alerts.filter(alert => !alert.checked)
  let oldAlerts = alerts.filter(alert => alert.checked)

  let alertTasks = selectAlertTasks(state)

  return {
    currentUserId: state.session.id,
    projects: Object.values(state.entities.projects),
    users: Object.values(state.entities.users),
    tasks: alertTasks,
    projects: state.entities.projects,
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
