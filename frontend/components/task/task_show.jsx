import React from 'react';

import TaskShowItem from './task_show_item';
import SVG from '../svg';
import TaskSection from './task_section';

class TaskShow extends React.Component {

  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    let { allTasks, recentTasks, upcomingTasks, updateTask, openModal, overdueTasks } = this.props;


    return (
      <div id="task-show" className="show">

        <div>
          <TaskSection tasks={upcomingTasks} filter="Upcoming" />
          <TaskSection tasks={recentTasks} filter="Resent" />
          <TaskSection tasks={overdueTasks} filter="Overdue" />
        </div>

      </div>
    )
  }
}

export default TaskShow;