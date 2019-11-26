import React from 'react';
import { withRouter } from 'react-router-dom';

import SVG from '../svg';
import { titleize } from '../../helpers/helper';

class TaskShowItem extends React.Component {
  constructor(props) {
    super(props);
    this.state  = this.props.task;
    this.completeTask = this.completeTask.bind(this);
  }

  completeTask() {
    event.preventDefault();
    this.setState({ status: 'Finished' }, () => this.props.updateTask(this.state));
  }

  getDayOfWeek() {
    let day = new Date(this.props.task.dueDate).getDay();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
  }

  render() {
    let { task, openModal } = this.props;
    
    return (
      <li id={`tsi${task.id}`} className="tsi">
        <div onClick={ this.completeTask }>
          <SVG name="done" rule="evenodd" h={18} w={18} fill="gray" transform="scale(0.75)" />
        </div>

        <h4 onClick={() => openModal(`task${task.id}`)}>
          {titleize(task.title)}
        </h4>

        <div onClick={() => this.props.history.push(`/projects/${task.project_id}`)}>
          {titleize(task.project_name)}
        </div>

        <label>{ this.getDayOfWeek() }</label>
      </li>
    )
  }
}

export default withRouter(TaskShowItem);