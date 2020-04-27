import React from 'react';
import SVG from '../svg';
import AlertIndexCont from '../notifications/alert_index_cont';

class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ddOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAlerts();
  }

  renderDropdown() {
    return (
      <div className='dd'>
        <h3>Notifications</h3>
        <AlertIndexCont />
        <h4>See All</h4>
      </div>
    )
  }

  handleClick() {
    let { newAlerts, updateAlerts } = this.props;
    if (!this.state.ddOpen && newAlerts.length > 0) {
      let ids = newAlerts.map(alert => alert.id )
      updateAlerts(ids);
    }
    this.setState({ ddOpen: !this.state.ddOpen });
  }


  render() {
    let { currentUser, newAlerts } = this.props;
    
    if (!currentUser) return null;

    return (
      <nav id="topbar" className="topbar si">
        <div className="notify" onClick={this.handleClick}>
          <SVG className="sb" h={24} w={24} name="notify" fill="black" />
          {newAlerts.length > 0 ? <div id="notify-num">{newAlerts.length}</div> : null }
  
          { this.state.ddOpen ? this.renderDropdown() : null}
 
        </div>
        <h1>Welcome, {currentUser.fname}</h1>

      </nav>
    );

  }
}

export default Topbar;