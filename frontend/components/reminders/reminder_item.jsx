import React from 'react';

class ReminderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }


  render() {
    let { reminder } = this.props;


    return (
      <li className="reminder">
        <input type="checkbox"/>
        <h3>{reminder.title}</h3>

      </li>
    )
  }
}

export default ReminderItem;