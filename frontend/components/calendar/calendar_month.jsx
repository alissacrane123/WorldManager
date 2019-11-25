import React from "react";
import CalendarDay from './calendar_day';
import { lastDayOfISOWeek } from "date-fns/esm";

class CalendarMonth extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.month !== this.props.month) {
      this.fetchTasks();
    }
  }
  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks() {
    let month = this.props.month + 1;
    let day = new Date().getDay();
    let year = this.props.year;
    // debugger
    this.props.fetchTasks("month", `${month}/${day}/${year}`);
  }

  daysInMonth(curOrPrev) {
    // let date = new Date();
    let curMonth = this.props.month + 1;
    let prevMonth = this.props.month;
    let month = curOrPrev === "cur" ? curMonth : prevMonth;
    let year = this.props.year;
    let numDays = new Date(year, month, 0).getDate();
    return numDays;
  }

  getDaysHeader() {
    let header = [
      "Sun",
      "Mon",
      "Tues",
      "Wed",
      "Thurs",
      "Fri",
      "Sat"
    ].map((day, i) => <li key={i}>{day}</li>);

    let hideClass = this.props.hideWeekend ? "hide" : "";
    return (
      <ul id="cal-header" className={hideClass}>
        {header}
      </ul>
    );
  }

  renderRows() {
    let { tasks, month, year, openModal } = this.props;

    let lastDayOfMonth = this.daysInMonth("cur");
    let first = this.getFirstRow();
    let rows = [first];
    let prevRow = rows[rows.length - 1];
    let prevDate = prevRow[6];

    while (
      (prevDate < lastDayOfMonth && prevRow[0] < prevDate) ||
      (prevDate < lastDayOfMonth && rows.length === 1)
    ) {
      let nextRow = this.renderRow(prevDate + 1);
      rows.push(nextRow);
      prevRow = rows[rows.length - 1];
      prevDate = prevRow[6];
    }

    let hideClass = this.props.hideWeekend ? "hide" : "";
    // debugger;
    rows = rows.map((row, i) => {
      return (
        <ul key={i} className={hideClass}>
          {row.map((cell, j) => {
            if ((i === 0 && cell > 7) || (i > 3 && cell < 9)) {
              return (
                <li key={j}>
                  <CalendarDay openModal={openModal} tasks={tasks} disabled={true} month={month} year={year} day={cell} />
                </li>              )
            }
            
            return (
              <li key={j}>
                <CalendarDay openModal={openModal} tasks={tasks} disable={false} month={month + 1} year={year} day={cell} />
              </li>
            )
          })}
        </ul>
      );
    });

    return rows;
  }

  getFirstRow() {
    let firstDayOfMonth = new Date(
      this.props.year,
      this.props.month,
      1
    ).getDay();
    if (firstDayOfMonth === 0) {
      return this.renderRow(1);
    } else {
      let daysInPrevMonth = this.daysInMonth("prev");
      let row = [];
      for (let i = 1 - firstDayOfMonth; i <= 0; i++) {
        let date = daysInPrevMonth + i;
        row.push(date);
      }
      let j = 1;
      while (row.length < 7) {
        row.push(j);
        j++;
      }

      return row;
    }
  }

  renderRow(startDate) {
    let lastDayOfMonth = this.daysInMonth("cur");
    let i = startDate;
    let row = [];

    while (i <= lastDayOfMonth && row.length < 7) {
      row.push(i);
      i++;
    }
    i = 1;
    while (row.length < 7) {
      row.push(i);
      i++;
    }

    return row;
  }

  render() {
    let rows = this.renderRows();
    // debugger
    return (
      <div id="cal-month">
        {this.getDaysHeader()}
        {rows}
      </div>
    );
  }
}

export default CalendarMonth;
