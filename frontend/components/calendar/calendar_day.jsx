import React from 'react';
import { titleize} from '../../helpers/helper';

class CalendarDay extends React.Component {

  filterTasks() {
    let { tasks, day, month, year, openModal } = this.props;
    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month}` : month;

    let date = `${month}/${day}/${year}`;
    let filteredTasks = tasks.filter(task => task.dueDate === date)

    tasks = filteredTasks.map((task, i) => (
      <li key={i} onClick={ () => openModal(`task${task.id}`)}>
        {titleize(task.title)}
      </li>
    ))
    return tasks;
  }

  render() {
    let { day, month, year, tasks, disabled } = this.props;
    let disabledClass = disabled ? 'disabled' : '';


    return (
      <div id="cal-day" className={disabledClass}>
        { day }
        <ul>
          { disabled ? null : this.filterTasks() }
        </ul>
      </div>
    )
  }
}

export default CalendarDay;