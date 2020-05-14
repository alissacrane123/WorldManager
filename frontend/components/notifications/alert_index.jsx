import React from 'react';
import SVG from '../svg';
// import { titleize } from "../../helpers/helper";
// import { timeSince } from "../../helpers/date_helper";
// import PmIndexItem from './pm_index_item';
import svgOps from '../svg_props';
import AlertItem from './alert_item';

class AlertIndex extends React.Component {


  // handleClick(pmId) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   let pms = this.props.pms;
  //   let pm = pms.filter(pm => pm.id === pmId)[0]
  //   let newPm = Object.assign({}, pm, { accepted: true });
  //   this.props.updatePM(newPm);
  //   this.props.closeDD();
  // }

  // renderTasks() {
  //   let { tasks, projects } = this.props;

  //   let items = tasks.map(task => {

  //     let el = <div><span>New </span>{task.project_name} <span>task: </span> {task.title}</div>
  //     return (
  //       <li className="notify__item">
  //         {el}
  //       </li>)
  //   })
  //   return items;
  // }

  render() {
    let { pms, alerts,updatePM, closeDD, currentUserId } = this.props;

    // let items = pms.map((pm, i) => {
    //   let el = <label>Accepted</label>
    //   let text = <div>{pm.inviterName} <span>invited you to</span> {titleize(pm.projectName)}</div>
    //   // let text = `${pm.inviterName} invited you to ${titleize(pm.projectName)}`

    //   if (!pm.accepted && pm.user_id  === currentUserId) {
    //     el = (
    //       <button className="accept-btn" onClick={() => this.handleClick(pm.id)}>
    //         Accept
    //       </button>
    //     );
    //   } else if (pm.inviter_id === currentUserId) {
    //     el = <label>{ timeSince(pm.updated_at, true) }</label>;
    //     text = <div>{pm.inviteeName} <span>accepted your invite to</span> {titleize(pm.projectName)}</div>
    //   }

    //   return (
    //     <li className="notify__item" key={i}>
    //       {text}
    //       { el }
    //     </li>
    // )});

    // let taskItems = this.renderTasks();


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