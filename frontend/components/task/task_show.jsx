import React from 'react';
import TaskShowSection from './task_show_section';

class TaskShow extends React.Component {

  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    let { allTasks, recentTasks, upcomingTasks } = this.props;

    let sections = [ [allTasks, 'All'], [recentTasks, 'Recent'], [upcomingTasks, 'Upcoming']].map((section, i) => (
      <section key={i}>
        <TaskShowSection filter={section[1]} tasks={section[0]} />
      </section>
    ));

    return (
      <div id="task-show">
       

        <div>
          { sections }

        </div>

      </div>
    )
  }
}

export default TaskShow;