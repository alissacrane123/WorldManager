import React from 'react';
import SVG from '../svg';
import { titleize } from "../../helpers/helper";
import PmIndexItem from './pm_index_item';

class PmIndex extends React.Component {
  componentDidMount() {
    // this.props.fetchPMs();
  }

  handleClick(pmId) {
    event.preventDefault();
    let pms = this.props.pms;
    let pm = pms.filter(pm => pm.id === pmId)[0]
    let newPm = Object.assign({}, pm, { request_status: true });
    this.props.updatePM(newPm);
  }

  render() {
    let { pms, updatePM } = this.props;

    pms = pms.map((pm, i) => {
      let el = <label>Accepted</label>
      if (!pm.request_status) {
        el = (
          <button className="accept" onClick={() => this.handleClick(pm.id)}>
            Accept
          </button>
        );
      }

      return (
        <li className="list-item task">
          {`${pm.inviterName} invited you to ${titleize(pm.projectName)} project`}

          { el }
          {/* <button className="accept" onClick={() => this.handleClick(pm.id)}>
            Accept
          </button> */}
        </li>
    )});

    return (
      // <section className="list">
      //   <div>
      //     <SVG name="carrot" h={12} w={12} rotate="rotate(90)" fill="gray" transform="scale(0.5)" />
      //     <h2>Project Invitations</h2>
      //   </div>
      <ul id="pm-index" >
        {pms}
      </ul>
      // </section>
    );
  }
}
export default PmIndex;