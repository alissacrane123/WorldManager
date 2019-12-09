import React from 'react';
import SVG from '../svg';

import PmIndexItem from './pm_index_item';

class PmIndex extends React.Component {

  componentDidMount() {
    // this.props.fetchPMs();
  }

  render() {
    let { pms, updatePM } = this.props;

    pms = pms.map((pm, i) => (
      <PmIndexItem key={i} pm={pm} updatePM={updatePM} />
    ))

    return (
      <section className="list">
        <div>
          <SVG name="carrot" h={12} w={12} rotate="rotate(90)" fill="gray" transform="scale(0.5)" />
          <h2>Project Invitations</h2>
        </div>
        <ul id="pm-index" className="index">
          
          { pms }


        </ul>
      </section>
    )
  }
}
export default PmIndex;