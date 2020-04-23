import React from 'react';

class ReminderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.handleClick= this.handleClick.bind(this);
  }
  
  handleClick() {
    let { reminder, updateTask } = this.props;
    let task = Object.assign(reminder, { status: 'done'});
    updateTask(task);
  }

  render() {
    let { reminder } = this.props;


    return (
      <li className="reminder">
        <div className="circle" onClick={this.handleClick}>
          <div></div>
        </div>
        <h3 className="reminder__text">{reminder.title}</h3>

      </li>
    )
  }
}

export default ReminderItem;