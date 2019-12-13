import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatJavascriptDate } from '../../helpers/helper';

class TaskFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.defaultFilter;
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  componentDidMount() {
    let filter = Object.assign({}, this.state);
    this.props.fetchTasks(filter)
  }

  handleChange(field, value) {
    event.preventDefault();
    this.setState({ [field]: [...this.state.field, value]})
  }

  handleStartDateChange(date) {
    let newDate = formatJavascriptDate(date)
    this.setState({ start_date: newDate })
  }
  handleEndDateChange(date) {
    let newDate = formatJavascriptDate(date)
    this.setState({ end_date: newDate })
  }

  handleSubmit() {
    event.preventDefault();
    let filters = Object.assign({}, this.state);
    this.props.fetchTasks(filters)
  }


  render() {
    let { currentUser } = this.props;

    let teammates = currentUser.teammates.map((mate, i) => (
      <li key={i}>
        <input type="checkbox" checked={this.state.user_id.includes(mate.id)} onChange={() => this.handleChange('user_id',mate.id)}/>
        <label>{mate.name}</label>
      </li>
    ))
  
    let projects = currentUser.projects.map((project, j) => (
      <li key={j}>
        <input type="checkbox" checked={this.state.project_id.includes(project.id)} onChange={() => this.handleChange('project_id', project.id)} />
        <label>{project.title}</label>
      </li>
    ))

    let statuses = ["Not Started", "In Progress", "Finished"].map((stat, i) => (
      <li key={i}>
        <input type="checkbox" checked={this.state.status.includes(stat)} onChange={() => this.handleChange('status', stat)} />
        <label>{stat}</label>
      </li>
    ))

    let countUserFilters = this.state.user_id.length > 0 ? ` (${this.state.user_id.length})` : '';
    let countProjectFilters = this.state.project_id.length > 0 ? ` (${this.state.project_id.length})` : '';
    let countStatusFilters = this.state.status.length > 0 ? ` (${this.state.status.length})` : '';

    return (
      <div id="task-filter" className="filter">
        <div>
          <h4>{`Owner${countUserFilters}`}</h4>
          <ul>
            { teammates }
          </ul>
        </div>

        <div>
          <h4>{`Project${countProjectFilters}`}</h4>
            <ul>
            { projects }
            </ul>
        </div>

        <div>
          <h4>{`Status${countStatusFilters}`}</h4>
            <ul>
            { statuses }
            </ul>
        </div>

        <div>
          <h4>Due Date</h4>
          <DatePicker onChange={this.handleStartDateChange} selected={new Date()} />
          <DatePicker onChange={this.handleEndDateChange} selected={new Date(this.state.end_date)} />
        </div>

        <button onClick={() => this.handleSubmit()}>Apply</button>
      </div>  
    )
  }
}

export default TaskFilter;