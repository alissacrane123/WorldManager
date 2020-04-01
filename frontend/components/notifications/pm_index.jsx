import React from 'react';
import SVG from '../svg';
import { titleize, timeSince } from "../../helpers/helper";
import PmIndexItem from './pm_index_item';

class PmIndex extends React.Component {
  componentDidMount() {
    // this.props.fetchPMs();
  }

  handleClick(pmId) {
    event.preventDefault();
    let pms = this.props.pms;
    let pm = pms.filter(pm => pm.id === pmId)[0]
    let newPm = Object.assign({}, pm, { accepted: true });
    this.props.updatePM(newPm);
  }

  render() {
    let { pms, updatePM, currentUserId } = this.props;

    pms = pms.map((pm, i) => {
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
        <li className="notify">
          {text}
          { el }
        </li>
    )});

    return (
      <ul id="notify-index" className="notify">
        {pms}
      </ul>
    );
  }
}
export default PmIndex;