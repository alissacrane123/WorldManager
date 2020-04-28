import React from 'react';
import SVG from '../svg';
import { titleize } from "../../helpers/helper";
import { timeSince } from "../../helpers/date_helper";
import PmIndexItem from './pm_index_item';

class AlertIndex extends React.Component {
  componentDidMount() {
    // this.props.fetchPMs();
  }

  handleClick(pmId) {
    event.preventDefault();
    event.stopPropagation();
    let pms = this.props.pms;
    let pm = pms.filter(pm => pm.id === pmId)[0]
    let newPm = Object.assign({}, pm, { accepted: true });
    this.props.updatePM(newPm);
  }

  renderTasks() {
    let { tasks, projects } = this.props;

    let items = tasks.map(task => {

      let el = <div><span>New </span>{task.project_name} <span>task: </span> {task.title}</div>
      return (
        <li className="notify">
          {el}
        </li>)
    })
    return items;
  }

  render() {
    let { pms, updatePM, currentUserId } = this.props;

    let items = pms.map((pm, i) => {
      let el = <label>Accepted</label>
      let text = <div>{pm.inviterName} <span>invited you to</span> {titleize(pm.projectName)}</div>
      // let text = `${pm.inviterName} invited you to ${titleize(pm.projectName)}`

      if (!pm.accepted && pm.user_id  === currentUserId) {
        el = (
          <button className="notify" onClick={() => this.handleClick(pm.id)}>
            Accept
          </button>
        );
      } else if (pm.inviter_id === currentUserId) {
        el = <label>{ timeSince(pm.updated_at, true) }</label>;
        text = <div>{pm.inviteeName} <span>accepted your invite to</span> {titleize(pm.projectName)}</div>
      }

      return (
        <li className="notify" key={i}>
          {text}
          { el }
        </li>
    )});

    let taskItems = this.renderTasks();

    return (
      <ul id="notify-index" className="notify">
        {items}
        {taskItems}
      </ul>
    );
  }
}
export default AlertIndex;