import React from 'react';
import { connect } from 'react-redux';
import { dateInOneWeek, getNextSunday, formatJavascriptDate } from '../../helpers/date_helper';

import ProjectIndexCont from '../project/project_index_cont';
import TaskShowItem from '../task/task_show_item';
import PmIndexContainer from '../notifications/alert_index_cont';
import TaskSection from '../task/task_section';

import SVG from '../svg'
import { updateFilter } from '../../actions/filter_actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskFilter: 'week'}
  }

  componentDidMount() {
    let date = dateInOneWeek();
    let nextSunday = getNextSunday();
    let today = formatJavascriptDate(new Date())

    this.props.fetchSearchTasks('week', nextSunday)
      .then(this.props.updateFilter('tasks', {startDate: today, endDate: nextSunday}))
  }

  render() {
    let { upcomingTasks, sortedTasks } = this.props;
    
    return(
      <div id="home">

        <section className="list home">
          <div>
            <SVG name="carrot" h={12} w={12} rotate="rotate(90)" fill="gray" transform="scale(0.5)" />
            <h2>Recent Projects</h2>
          </div>

          <ProjectIndexCont />

        </section>
   
        <TaskSection tasks={sortedTasks} filter="Upcoming"/>

        
      </div>
    )
  }
}

export default Home;
