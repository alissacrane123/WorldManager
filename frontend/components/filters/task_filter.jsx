import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatJavascriptDate } from '../../helpers/helper';
import Checkbox from './checkbox';

class TaskFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      filter: this.props.defaultFilter,
      expanded: { owner: false, project: false, status: false} 
    }
    // this.state = this.props.defaultFilter;
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  // this.setState({ pm: { ...this.state.pm, [field]: event.target.value } });
  componentDidMount() {
    let filter = Object.assign({}, this.state.filter);
    this.props.fetchTasks(filter)
  }

  handleChange(field, value) {
    this.setState({ filter: { ...this.state.filter, [field]: [...this.state.filter[field], value] } })
    // this.setState({ [field]: [...this.state.field, value]})
  }


  handleStartDateChange(date) {
    let newDate = formatJavascriptDate(date)
    this.setState({ filter: { ...this.state.filter, start_date: newDate } })
    // this.setState({ start_date: newDate })
  }
  handleEndDateChange(date) {
    let newDate = formatJavascriptDate(date)
    this.setState({ filter: { ...this.state.filter, end_date: newDate } })
    // this.setState({ end_date: newDate })
  }

  handleSubmit() {
    event.preventDefault();
    let filters = Object.assign({}, this.state.filter);
    this.props.fetchTasks(filters)
  }
  
  isChecked(project) {
    let ids = this.state.filter.project_id
    if (ids.includes(project.id)) {
      return true;
    }
    return false;
  }

  render() {
    let { currentUser } = this.props;

    let teammates = currentUser.teammates.map((mate, i) => (
      <li key={i}>
        <input type="checkbox" checked={this.state.filter.user_id.includes(mate.id)} onChange={() => this.handleChange('user_id',mate.id)}/>
        <label>{mate.name}</label>
      </li>
    ))
    let ids = this.state.filter.project_id

    let projects = currentUser.projects.map((project, j) => {
      // debugger
      return (
      <li key={j}>
        {/* <Checkbox isChecked={this.state.filter.project_id.includes(project.id)} /> */}
        <input type="checkbox" checked={ids.includes(project.id)} onChange={() => this.handleChange('project_id', project.id)} />
        <label>{project.title}</label>
      </li>
    )})

    let statuses = ["Not Started", "In Progress", "Finished"].map((stat, i) => (
      <li key={i}>
        <input type="checkbox" checked={this.state.filter.status.includes(stat)} onChange={() => this.handleChange('status', stat)} />
        <label>{stat}</label>
      </li>
    ))

    let countUserFilters = this.state.filter.user_id.length > 0 ? ` (${this.state.filter.user_id.length})` : '';
    let countProjectFilters = this.state.filter.project_id.length > 0 ? ` (${this.state.filter.project_id.length})` : '';
    let countStatusFilters = this.state.filter.status.length > 0 ? ` (${this.state.filter.status.length})` : '';

    return (
      <div id="task-filter" className="filters">
        <div className="filter">
          <h4>{`Owner${countUserFilters}`}</h4>
          <ul>
            { teammates }
          </ul>
        </div>

        <div className="filter">
          <h4>{`Project${countProjectFilters}`}</h4>
            <ul>
            { projects }
            </ul>
        </div>

        <div className="filter">
          <h4>{`Status${countStatusFilters}`}</h4>
            <ul>
            { statuses }
            </ul>
        </div>

        <div>
          <h4>Due Date</h4>
          <DatePicker onChange={this.handleStartDateChange} selected={new Date()} />
          <DatePicker onChange={this.handleEndDateChange} selected={new Date(this.state.filter.end_date)} />
        </div>

        <button onClick={() => this.handleSubmit()}>Apply</button>
      </div>  
    )
  }
}

export default TaskFilter;