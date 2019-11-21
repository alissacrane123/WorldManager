import React from 'react';
import CalendarMonth from './calendar_month';
import SVG from '../svg';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    this.state = { month: currentMonth, year: currentYear, displayMonth: true, hideWeekend: false  }
  }

  renderHeader() {
    let months = ["January", "February","March","April","May","June",
      "July","August","September","October","November","December"];

    return <h1>{ months[this.state.month] } {this.state.year}</h1>
  }

  nextMonth() {
    let { month, year  } =  this.state;
    if (month === 11) {
      this.setState({ month: 0 });
      this.setState({ year: year + 1});
    } else  {
      this.setState({ month: month +  1 })
    }
  }

  prevMonth() {
    let { month, year } = this.state;
    if (month === 0) {
      this.setState({ month: 11 });
      this.setState({ year: year - 1 });
    } else {
      this.setState({ month: month - 1 });
    }
  }

  toggleDisplay() {
    this.setState({ displayMonth: !this.state.displayMonth });
  }

  toggleCheck() {
    this.setState({ hideWeekend: !this.state.hideWeekend })
  }



  render() {
    let  { month, year, displayMonth, hideWeekend } = this.state;

    let monthClass = displayMonth ? "selected" : '';
    let weekClass = displayMonth ? "" : "selected";

    return (
      <div id="calendar">
        <section>
          <div onClick={() => this.prevMonth()}>
            <SVG name="arrow2" h={24} w={24} rotate="rotate(180)" />
          </div>

          {this.renderHeader()}

          <div onClick={() => this.nextMonth()}>
            <SVG name="arrow2" h={24} w={24} />
          </div>

          <button onClick={() => this.toggleDisplay()} className={monthClass}>Month</button>
          <button onClick={() => this.toggleDisplay()}className={weekClass}>Week</button>
          <label>
            <input onChange={() => this.toggleCheck()} type="checkbox" checked={hideWeekend}/> Weekdays Only
          </label>
        </section>

        <CalendarMonth month={this.state.month} year={this.state.year} hideWeekend={hideWeekend}/>
      </div>
    );
  }
}

export default Calendar;