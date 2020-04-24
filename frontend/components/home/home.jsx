import React from 'react';
import { connect } from 'react-redux';
import { dateInOneWeek, getNextSunday, formatJavascriptDate } from '../../helpers/date_helper';

import ProjectIndexCont from '../project/project_index_cont';
import TaskSection from '../task/task_section';
import ReminderIndexCont from '../reminders/reminder_index_cont';

import svgOps from '../svg_props';
import SVG from '../svg'
import { updateFilter } from '../../actions/filter_actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskFilter: 'week', search: '', open:true};
  }

  componentDidMount() {
    let date = dateInOneWeek();
    let nextSunday = getNextSunday();
    let today = formatJavascriptDate(new Date())

    // this.props.fetchSearchTasks('week', nextSunday)
    this.props.fetchSearchTasks('overdue-upcoming', nextSunday)
      .then(this.props.updateFilter('tasks', {startDate: today, endDate: nextSunday}))
  }

  toggle() {
    this.setState({ open: !this.state.open })
  }

  handleChange(field) {
    this.setState({ [field]: event.target.value })
  }

  render() {
    let { upcomingTasks, sortedTasks, overdueTasks, openModal } = this.props;

    let cn = this.state.open ? '' : 'hide';
    let rotate = this.state.open ? 'rotate(90)' : '';
    
    return(
      <div id="home" className='home'>

        <div className="home__left">
          <section className="list home">
            <div>
              <div className="toggle" onClick={() => this.toggle()}>
                <SVG 
                  name="carrot" h={12} w={12} 
                  rotate={rotate} fill="gray" 
                  transform="scale(0.5)" />
                <h2>Projects</h2>
              </div>
              <div className="search" onBlur={() => this.setState({ search: '' })}>
                <input 
                  type="text" 
                  value={this.state.search}
                  onChange={() => this.handleChange('search')}
                  placeholder="Search..."/>
                <SVG name="search"  {...svgOps["12"]}fill="#c3c6c7"/>
              </div>

              <button className="blue-btn" onClick={() => openModal('newProject')}>
                <SVG name="plus"  {...svgOps["12"]} fill="white" />
                <label>New Project</label>
              </button>
            </div>
            <ProjectIndexCont search={this.state.search} cn={cn}/>
          </section>
    
          <TaskSection tasks={sortedTasks} filter="Upcoming" header="Upcoming Tasks" showBtn={true} openModal={openModal}/>
          <TaskSection tasks={overdueTasks} filter="Overdue" header="Overdue Tasks" />
        </div>

        <div className="home__right">
          <ReminderIndexCont />
        </div>
        
      </div>
    )
  }
}

export default Home;
