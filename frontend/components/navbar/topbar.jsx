import React from 'react';
import SVG from '../svg';
import AlertIndexCont from '../notifications/alert_index_cont';

class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ddOpen: false }
  }

  componentDidMount() {
    // debugger
    this.props.fetchAlerts();
  }


  render() {
    let { currentUser, history, newPms, completedPms } = this.props;
    
    if (!currentUser) return null;

    let cn = this.state.ddOpen ? 'dd' : 'dd hide'

    return (
      <nav id="topbar" className="topbar si">
        <h1>Welcome, {currentUser.fname}</h1>
        <div className="notify" onClick={() => this.setState({ ddOpen: !this.state.ddOpen})}>
          <SVG className="sb" h={24} w={24} name="notify" fill="black" />
          {newPms.length > 0 ? <div id="notify-num">{newPms.length}</div> : null }
  
          <div className={cn}>
            <h3>Notifications</h3>
            <AlertIndexCont />
            <h4>See All</h4>
          </div>
        </div>

      </nav>
    );

  }
}

export default Topbar;