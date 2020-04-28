import React from 'react';
import { withRouter } from 'react-router-dom';

import SVG from '../svg';
import { titleize } from '../../helpers/helper';
import { formatJavascriptDate, timeSince } from '../../helpers/date_helper';

class TaskShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.completeTask = this.completeTask.bind(this);
  }

  completeTask() {
    event.preventDefault();
    let task = Object.assign({}, this.props.task, { status: 'done' });
    
    this.props.updateTask(task);
    
  }

  getNextSunday() {
    let d = new Date();
    let num = d.setDate(d.getDate() + ((7 - d.getDay()) % 7 + 0) % 7);
    d = new Date(num)
    return formatJavascriptDate(d);
  }

  getDayOfWeek() {
    let { dueDate } = this.props.task 
    let sunday = new Date(this.getNextSunday());
    let date = new Date(dueDate);
    if (sunday >= date) {
      let day = new Date(dueDate).getDay();
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return days[day];
    } else if (dueDate){
      // debugger
      if (dueDate[0] === "0") return dueDate.slice(1, 5);
      return dueDate.slice(0, 5);
    }
  }

  render() {
    let { task, openModal, overdue } = this.props;

    let dueDate = overdue ? timeSince(task.due_date) : this.getDayOfWeek();
    
    return (
      <li id={`tsi${task.id}`} className="list-item">
        <div onClick={ this.completeTask }>
          <SVG name="done" rule="evenodd" h={18} w={18} fill="gray" transform="scale(0.75)" />
        </div>

        <h4 onClick={() => openModal(`task${task.id}`)}>
          {titleize(task.title)}
        </h4>

        <div className="list-item__project" onClick={() => this.props.history.push(`/projects/${task.project_id}`)}>
          {task.project_name ? titleize(task.project_name): null}
        </div>

        {/* <label>{ this.getDayOfWeek() }</label> */}
        <label>{ dueDate }</label>
      </li>
    )
  }
}

export default withRouter(TaskShowItem);