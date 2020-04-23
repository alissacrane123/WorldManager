import React from 'react';
import DatePicker from "react-datepicker";
import { titleize} from '../../helpers/helper';
import SVG from '../svg';

class CalendarDay extends React.Component {
  constructor(props) {
    super(props);
    let date = this.formatDateString();
    // let emptyTask = { title: '', user_id: this.props.user.id, status: 'Not Started', due_date: '', description: '', priority: 'low' }
    let emptyTask = { title: '', user_id: this.props.user.id, status: 'todo', description: '', priority: 'low' }
    // emptyTask = Object.assign(emptyTask, {due_date: date})
   
    this.state = {
      task: emptyTask,
      showForm: false,
      emptyTask: emptyTask
    }
    // this.completeTask = this.completeTask.bind(this);
  }

  completeTask(task) {
    event.preventDefault();
    let newTask = Object.assign({}, task, { status: 'done' }, {due_date: this.formatDateString()});

    this.props.updateTask(newTask);

  }


  formatDateString() {
    
    let { day, month, year } = this.props;
    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month}` : month;
    let date = `${month}/${day}/${year}`;
    
    return date;
  }

  filterTasks() {
    let { tasks, day, month, year, openModal } = this.props;
  

    let date = this.formatDateString();
    let filteredTasks = tasks.filter(task => task.dueDate === date)
    let sorted = filteredTasks.sort((a, b) => b.id - a.id);

    tasks = sorted.map((task, i) => (
      <li className="cal-day-item" key={i} onClick={ () => openModal(`task${task.id}`)}>
        <h4>{titleize(task.title)}</h4>
        <div onClick={() => this.completeTask(task)}>
          <SVG name="done" rule="evenodd" h={18} w={18} fill="gray" transform="scale(0.75)" />
        </div>
      </li>
    ))
    return tasks;
  }

  handleChange() {
    event.preventDefault();
    this.setState({ task: {...this.state.task, title: event.target.value  }})
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      let task = this.state.task;
      task = Object.assign(task, { due_date: this.formatDateString() })
      // debugger
      this.props.createTask(task)
        .then(() => this.setState({ task: this.state.emptyTask, showForm: false}))
    }
  }

  addTask() {
    this.setState({ showForm: !this.state.showForm }, () => {
      let input = document.getElementById('cal-input');
      input ? input.focus() : null
    })
  }

  render() {
  
    let { day, month, year, tasks, disabled } = this.props;
    let disabledClass = disabled ? 'disabled' : '';

    let li = (
      <li>
        <input 
          type="text" 
          id="cal-input"
          value={this.state.task.title} 
          onKeyPress={(e) => this.handleKeyPress(e)}
          onChange={() => this.handleChange()} />
      </li>
    )

    let form = this.state.showForm ? li : null;

    let taskItems = this.filterTasks();

    return (
      <div id="cal-day" className={disabledClass} >
        {/* { day } */}
        <div id="flag" onClick={() => this.addTask()}>{day}</div>
        <ul id={`cdl${day}`}>
          { form }
          { disabled ? null : taskItems }
        </ul>

      </div>
    )
  }
}

export default CalendarDay;