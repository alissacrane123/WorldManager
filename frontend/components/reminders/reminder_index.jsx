import React from 'react';
import { dateToWords } from '../../helpers/date_helper';
import ReminderItem from './reminder_item';
import SVG from '../svg';

class ReminderIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', reminder: true};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    // this.props.fetchReminders('reminder')
  }

  handleChange() {
    this.setState({ title: event.target.value })
  }

  handleSubmit() {
    
    if ((event.type === 'keypress' && event.key == 'Enter') || event.type === 'click') {
      this.props.createTask(this.state)
        .then(() => this.setState({ title: '' }))
    } 
  }

  renderReminders() {
    let { reminders, updateTask, deleteTask } = this.props;

    let items = reminders.map((item, i) => (
      <ReminderItem reminder={item} key={i} updateTask={updateTask} deleteTask={deleteTask}/>
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
        <div className="plus" onClick={this.handleSubmit}>
          <SVG name="plus" h="15" w="15" transform="scale(0.625)" fill="#45a29e" />
        </div>
        <input 
          type="text" 
          onKeyPress={this.handleSubmit}
          className="reminder__text" 
          onChange={this.handleChange}
          value={this.state.title}
          placeholder="New reminder..."/>
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