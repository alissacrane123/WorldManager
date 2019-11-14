import React from 'react';
import TaskIndexItem from './task_index_item';

class TaskIndex extends React.Component {

  renderTasks(i) {
    let { notStarted, inProgress, finished } = this.props;
    let tasks = [ notStarted, inProgress, finished ];
    let taskStatus = ["Not Started", "In Progress", "Finished"];
    
    tasks = tasks[i].map(task => (
      <li key={task.id}>
        <TaskIndexItem task={task} />
      </li>
    ))

    return (
      <section>
        <h3>{ taskStatus[i] }</h3>
        <ul>
          { tasks }
        </ul>
      </section>
    )
  }


  render() {

    return (
      <div id="task-index">
        <h2>Current Tasks</h2>

        <div>
          {this.renderTasks(0)}
          {this.renderTasks(1)}
          {this.renderTasks(2)}
        </div>


      </div>
    )
  }
}


export default TaskIndex;
