import React from 'react';
import SVG from '../svg';
import PmIndexCont from '../notifications/pm_index_cont';

class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ddOpen: false }
  }

  render() {
    let { currentUser, history, newPms, completedPms } = this.props;

    if (history.location.pathname === '/' && currentUser) {
      let cn = this.state.ddOpen ? 'dd' : 'dd hide'
      return (
        <nav id="topbar" className="topbar si">
          <h1>Welcome, {currentUser.fname}</h1>
          <div className="notify" onClick={() => this.setState({ ddOpen: !this.state.ddOpen})}>
            <SVG className="sb" h={24} w={24} name="notify" fill="black" />
            {newPms.length > 0 ? <div id="notify-num">{newPms.length}</div> : null }
   
            <div className={cn}>
              <PmIndexCont />
            </div>
          </div>

        </nav>
      );
    } else {
      return (
        <nav id="topbar" className="topbar so">
          <h1>World Manager</h1>
        </nav>
      );
    }
  }
}

export default Topbar;