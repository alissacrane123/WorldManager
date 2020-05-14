import React from 'react';
import { connect } from 'react-redux';
import AlertIndex from './alert_index';
import { fetchPMs, updatePM } from '../../actions/pm_actions';
import { sortByUpdatedAt } from '../../helpers/helper';

import {  replaceAlertsWithAlertItems } from '../../helpers/alert_helper';

const msp = (state, ownProps) => {
  let alerts = Object.values(state.entities.alerts);
  let pms = Object.values(state.entities.pms);

  pms = pms.filter(pms => pms.accepted || pms.user_id == state.session.id)


  let sortedAlerts = sortByUpdatedAt(alerts);
  let alertItems = replaceAlertsWithAlertItems(sortedAlerts, state);


  return {
    currentUserId: state.session.id,
    alerts: alertItems,
    pms: pms,

  };
}

const mdp = dispatch => {
  return {
    fetchPMs: () => dispatch(fetchPMs()),
    updatePM: (pm) => dispatch(updatePM(pm))
  }
}

export default connect(msp, mdp)(AlertIndex)
