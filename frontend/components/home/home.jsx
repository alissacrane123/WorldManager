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
    this.state = { taskFilter: 'week', search: '', openProject: true, openTask: true};
  }

  componentDidMount() {
    let date = dateInOneWeek();
    let nextSunday = getNextSunday();
    let today = formatJavascriptDate(new Date())


    this.props.fetchSearchTasks('overdue-upcoming', nextSunday)
      .then(this.props.updateFilter('tasks', {startDate: today, endDate: nextSunday}))
  }

  toggle(field) {
    if (field == 'project') {
      this.setState({ openProject: !this.state.openProject })
    } else {
      this.setState({ openTask: !this.state.openTask })
    }
  }

  handleChange(field) {
    this.setState({ [field]: event.target.value })
  }

  render() {
    let { upcomingTasks, sortedTasks, overdueTasks, openModal } = this.props;
    let { openProject, openTask} = this.state;

    let projectCn = openProject ? 'list home home__project-list' : 'list home home__project-list closed';
    let mainTaskCn = "list home home__task-list";
    let cn = openProject ? '' : 'hide';
    let taskCn = openTask ? 'task-sections' : 'task-sections hide';

    let rotate = openProject ? 'rotate(90)' : '';
    let taskRotate = openTask ? 'rotate(90)' : '';

    if (openProject && !openTask) {
      projectCn = 'list home home__project-list grow'
      mainTaskCn = "list home home__task-list shrink"
    }
    
    return(
      <div id="home" className='home'>

        <div className="home__left">
          <section className={projectCn}>
            <div>
              <div className="toggle" onClick={() => this.toggle('project')}>
                <SVG 
                  name="carrot" h={12} w={12} 
                  rotate={rotate} fill="gray" 
                  transform="scale(0.5)" />
                <h2 className="home__h2">Projects</h2>
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

          <section className={mainTaskCn}>
            <div>
              <div className="toggle" onClick={() => this.toggle()}>
                <SVG
                  name="carrot" h={12} w={12}
                  rotate={taskRotate} fill="gray"
                  transform="scale(0.5)" />
                <h2 className="home__h2">Tasks</h2>
              </div>

              <button className="blue-btn" onClick={() => openModal('newTasks')}>
                <SVG name="plus"  {...svgOps["12"]} fill="white" />
                <label>New Task</label>
              </button>
            </div>

            <div className={taskCn}>
              <TaskSection tasks={sortedTasks} filter="Upcoming" header="Upcoming" showBtn={true} openModal={openModal}/>
              <TaskSection tasks={overdueTasks} filter="Overdue" header="Overdue" />
            </div>
          </section>
    
        </div>

        <div className="home__right">
          <ReminderIndexCont />
        </div>
        
      </div>
    )
  }
}

export default Home;
