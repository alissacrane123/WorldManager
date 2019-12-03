import React from 'react';

import TaskShowItem from './task_show_item';
import SVG from '../svg';

class TaskShow extends React.Component {

  componentDidMount() {
    this.props.fetchTasks();
  }

  renderSections() {
    let { allTasks, recentTasks, upcomingTasks, updateTask, openModal } = this.props;
    // let sections = [[allTasks, 'All'], [recentTasks, 'Recent'], [upcomingTasks, 'Upcoming']].map((section, i) => {
    let sections = [[recentTasks, 'Recent'], [upcomingTasks, 'Upcoming']].map((section, i) => {
      let tasks = section[0].map((task, i) => <TaskShowItem task={task} key={i} updateTask={updateTask} openModal={openModal}/>);
      let filter = section[1];

      return (
        <section key={i} className="list">
          <div>
            <SVG name="carrot" h={12} w={12} rotate="rotate(90)" fill="gray" transform="scale(0.5)" />
            <h2>{`${filter} Tasks`}</h2>
          </div>
          <ul>
            {tasks}
          </ul>

        </section>
      )
    });

    return sections
  }

  render() {

    let sections = this.renderSections();

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