import React from 'react';
import SVG from '../svg';

import svgOps from '../svg_props';
import AlertItem from './alert_item';

class AlertIndex extends React.Component {

  render() {
    let { pms, alerts,updatePM, closeDD, currentUserId } = this.props;



    let alertItems = alerts.map((alert, i) => (
      <AlertItem 
        key={i} 
        item={alert} 
        pms={pms} 
        updatePM={updatePM}
        closeDD={closeDD}
        currentUserId={currentUserId} />
    ));

    if (!alertItems.length) {
      alertItems = (
        <div className="no-items alert">
          <h3>None</h3>
          <SVG name="smile" {...svgOps["24nv"]} fill="#828991" />
        </div>
      )
    }

    return (
      <ul id="notify-index" className="notify">
        { alertItems }
      </ul>
    );
  }
}
export default AlertIndex;