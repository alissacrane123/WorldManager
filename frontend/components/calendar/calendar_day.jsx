import React from 'react';

class CalendarDay extends React.Component {

  filterTasks() {
    let { tasks, day, month, year } = this.props;

    if (day === 8) {
      debugger
    }

    let date = day < 10 ? `${month}/0${day}/${year}` :  `${month}/${day}/${year}`
    tasks = tasks.filter(task => task.due_date === date)
    tasks = tasks.map((task, i) => (
      <li key={i}>{task.title}</li>
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
          { disabled ? null : this.filterTasks()}
        </ul>
      </div>
    )
  }
}

export default CalendarDay;