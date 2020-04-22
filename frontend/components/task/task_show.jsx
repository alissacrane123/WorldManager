import React from 'react';

import TaskShowItem from './task_show_item';
import SVG from '../svg';
import TaskSection from './task_section';
import TaskFilterContainer from '../filters/task_filter_cont';

class TaskShow extends React.Component {



  render() {
    let {  projectTasks } = this.props;

    let sections = Object.keys(projectTasks).map((el, i) => {
      let label = el === '0' ? 'Unassigned' : el
      return (
        <TaskSection tasks={projectTasks[el]} filter={label} key={i}/>
      )
    })

    if (sections.length < 1) {
      sections = <h1>No Upcoming Tasks</h1>
    }

    return (
      <div id="task-show" className="show">
        <TaskFilterContainer />

        <div>
          { sections }
        </div>

      </div>
    )
  }
}

export default TaskShow;