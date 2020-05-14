import React from 'react';
import SVG from '../svg';
import svgOps from '../svg_props';

class ReminderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.handleClick= this.handleClick.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
  }
  
  handleClick() {
    let { reminder, updateTask } = this.props;
    let task;
    if (reminder.status == 'done') {
      task = Object.assign(reminder, { status: 'todo' });
    } else {
      task = Object.assign(reminder, { status: 'done'});
    }
    updateTask(task);
  }

  handleDelete() {
    this.props.deleteTask(this.props.reminder.id);
  }

  render() {
    let { reminder } = this.props;

    let cn = reminder.status == 'done' ? 'reminder done' : 'reminder';
    return (
      <li className={cn}>
        <div className="circle" onClick={this.handleClick}>
          <div></div>
        </div>
        <div className="reminder__text">
          <h3> {reminder.title} </h3>
          <div onClick={this.handleDelete}>
            <SVG name="skinny-x" {...svgOps["12"]} fill="#676767"/>
          </div>
        </div>
      </li>
    )
  }
}

export default ReminderItem;