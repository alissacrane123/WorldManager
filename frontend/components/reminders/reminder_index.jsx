import React from 'react';
import { dateToWords } from '../../helpers/date_helper';
import ReminderItem from './reminder_item';

class ReminderIndex extends React.Component {

  componentDidMount() {
    this.props.fetchReminders('reminder')
  }

  renderReminders() {
    let { reminders } = this.props;

    let items = reminders.map((item, i) => (
      <ReminderItem reminder={item} key={i} />
    ));

    return (
      <ul>{items}</ul>
    )
  }


  render() {
    let { reminders } = this.props;

    let reminderIndex = this.renderReminders();

    return (
      <div className="reminders">
        <header>
          <h1>Reminders</h1>
          <h1>{dateToWords(new Date(), true)}</h1>
        </header>


        { reminderIndex }

      </div>
    )
  }
}

export default ReminderIndex;