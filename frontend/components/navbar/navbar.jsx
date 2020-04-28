import React from 'react';
import { withRouter } from 'react-router-dom';
import { formatJavascriptDate, dateInOneWeek} from '../../helpers/date_helper';
import SVG from '../svg';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleTaskClick = this.handleTaskClick.bind(this);
  }

  openMenu() {
    event.preventDefault();
    this.setState({ open: true }, () => {
      document.addEventListener('click', this.closeMenu)
    })
  }

  closeMenu() {
    event.preventDefault();
    this.setState({ open: false }, () => {
      document.removeEventListener('click', this.closeMenu)
    })
  }

  handleTaskClick() {
    let today = formatJavascriptDate(new Date())
    let date = dateInOneWeek();
    this.props.updateFilter('tasks', { startDate: today, endDate: date })
    this.props.history.push('/tasks')
  }

  toggleSidebar() {
    let labels = document.querySelectorAll('#navbar label').forEach(label => {
      label.classList.toggle('close');
    });

    document.getElementById('navbar').classList.toggle('expanded');
    document.getElementById('content').classList.toggle('expanded');
    document.getElementById('sb-arrow').classList.toggle('close');
    document.getElementById('sb-menu').classList.toggle('close');
  }

  render() {
    let { logout, pms } = this.props;

    return(
      <nav id="navbar" className="navbar">
  
        <div onClick={() => this.toggleSidebar()}>
          <SVG id="sb-menu" className="sb" h={24} w={24} transform="scale(0.63)" name="menue" fill="white" />
          <SVG id="sb-arrow" className="sb2 close" name="big-arrow" h={24} w={24} fill="white" transform="translate(32 25) scale(1.3) rotate(180)" id="sb-arrow" />
        </div>
  
        <div onClick={() => this.props.history.push('/')}>
          <SVG className="sb" h={24} w={24} name="home" fill="white"/>
          <label className="close">Home</label>
        </div>
  
        {/* <div onClick={() => this.props.history.push('/tasks')}> */}
        <div onClick={this.handleTaskClick}>
          <SVG className="sb" h={24} w={24} name="task" fill="white" />
          <label className="close">Tasks</label>
        </div>
  
        <div onClick={() => this.props.history.push('/cal')}>
          <SVG className="sb" h={24} w={24} name="calendar" fill="white" />
          <label className="close">Calendar</label>
        </div>
  
        <div onClick={() => this.props.history.push('/team')}>
          <SVG className="sb" h={24} w={24} name="team" fill="white" />
          <label className="close">Team</label>
        </div>

        {/* <div onClick={() => this.props.history.push('/notify')} className="notify">
          <SVG className="sb" h={24} w={24} name="notify" fill="white" />
          {pms.length > 0 ? <div id="notify-num">{pms.length}</div> : null }
          <label className="close">Notifications</label>
        </div>
         */}
        <div onClick={() => this.openMenu()}>
          <SVG id="settings" className="sb" name="settings" h={24} w={24} fill="white" />
          <label className="close">Settings</label>

        {
          this.state.open 
          ? (
            <ul>
              <li onClick={() => logout()}>Logout</li>
              <li>Profile</li>
            </ul>
          )
          : (
            null
          )
        }
      </div>
      </nav>
    )
  }

}

export default withRouter(Navbar);