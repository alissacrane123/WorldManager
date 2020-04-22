import React from 'react';
import { dateToWords } from '../../helpers/date_helper';
import ReminderItem from './reminder_item';
import SVG from '../svg';

class ReminderIndex extends React.Component {

  componentDidMount() {
    this.props.fetchReminders('reminder')
  }

  renderReminders() {
    let { reminders } = this.props;

    let items = reminders.map((item, i) => (
      <ReminderItem reminder={item} key={i} />
    ));

    let form = this.renderReminderForm();

    return (
      <ul>
        { form }
        {items}
      </ul>
    )
  }

  renderReminderForm() {
    return (
      <li className="reminder">
        <div className="plus">
          <SVG name="skinny-plus" h="20px" w="20px" transform="scale(0.83)"fill="#676767" />
        </div>
        <input type="text" className="reminder__text" placeholder="New reminder..."/>
      </li>
    )
  }


  render() {
    let { reminders } = this.props;

    let reminderIndex = this.renderReminders();

    return (
      <div className="reminders">
        <header>
          <h1>Reminders</h1>
          <h2>{dateToWords(new Date(), true)}</h2>
        </header>


        { reminderIndex }

      </div>
    )
  }
}

export default ReminderIndex;