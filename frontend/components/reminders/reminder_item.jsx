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
        <div className="circle">
          <div></div>
        </div>
        <h3 className="reminder__text">{reminder.title}</h3>

      </li>
    )
  }
}

export default ReminderItem;