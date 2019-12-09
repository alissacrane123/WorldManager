import React from 'react';
import { titleize } from '../../helpers/helper';

class PmIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.state = Object.assign({}. this.props.pm);

  }

  handleClick() {
    event.preventDefault();
    let pm = this.props.pm;
    let newPm = Object.assign({}, pm, { request_status: true })
    this.props.updatePM(newPm)
  }

  render() {
    let { pm, updatePM } = this.props;

    return (
      <li className="list-item task" >
        {titleize(pm.projectName)}

        <button className="accept" onClick={() => this.handleClick()}>Accept</button>
      </li>
    )
  }
}

export default PmIndexItem;