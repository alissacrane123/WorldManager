import React from 'react';
import DatePicker from "react-datepicker";
import { titleize} from '../../helpers/helper';

class CalendarDay extends React.Component {
  constructor(props) {
    super(props);
    let date = this.formatDateString();
    let emptyTask = { title: '', user_id: this.props.user.id, status: 'Not Started', due_date: '', description: '', priority: 'low' }

    emptyTask = Object.assign(emptyTask, {due_date: date})
   
    this.state = {
      task: emptyTask,
      showForm: false,
      emptyTask: emptyTask
    }
  }


  formatDateString() {
    // debugger
    let { day, month, year } = this.props;
    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month}` : month;
    let date = `${month}/${day}/${year}`;
    // debugger
    return date;
  }

  filterTasks() {
    let { tasks, day, month, year, openModal } = this.props;
  

    let date = this.formatDateString();
    let filteredTasks = tasks.filter(task => task.dueDate === date)

    tasks = filteredTasks.map((task, i) => (
      <li className="cal-day-item" key={i} onClick={ () => openModal(`task${task.id}`)}>
        {titleize(task.title)}
      </li>
    ))
    return tasks;
  }

  handleChange() {
    event.preventDefault();
    this.setState({ task: {...this.state.task, title: event.target.value  }})
  }

  handleKeyPress(e) {
    // debugger
    if (e.key === 'Enter') {
      let task = this.state.task;
      this.props.createTask(task)
        .then(() => this.setState({ task: this.state.emptyTask, showForm: false}))
    }
  }

  addTask() {
    this.setState({ showForm: true })
  }

  render() {
  
    let { day, month, year, tasks, disabled } = this.props;
    let disabledClass = disabled ? 'disabled' : '';
    // debugger
    let li = (
      <li>
        <input 
          type="text" 
          value={this.state.task.title} 
          onKeyPress={(e) => this.handleKeyPress(e)}
          onChange={() => this.handleChange()} />
      </li>
    )

    let form = this.state.showForm ? li : null;

    return (
      <div id="cal-day" className={disabledClass} >
        { day }
        <ul id={`cdl${day}`}>
          { disabled ? null : this.filterTasks() }

          { form }
        </ul>

        <div id="flag" onClick={() => this.addTask()}></div>
      </div>
    )
  }
}

export default CalendarDay;