import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatJavascriptDate, titleize } from '../../helpers/helper';


class TaskFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      filter: this.props.defaultFilter,
      expanded: { Owner: false, Project: false, Status: false} 

    }
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidMount() {
    let filter = Object.assign({}, this.state.filter);
    this.props.fetchTasks(filter)
  }

  handleChange(field, value) {
    if (!this.state.filter[field].includes(value)) {
      this.setState({ filter: { ...this.state.filter, [field]: [...this.state.filter[field], value] } })   
    } else {
      let newArr = this.state.filter[field].filter(id => id !== value)
      this.setState({ filter: { ...this.state.filter, [field]: newArr } })   
    }
  }

  handleDateChange(date, event) {
    let newDate = formatJavascriptDate(event);
    this.setState({ filter: { ...this.state.filter, [date]: newDate } })
  }

  handleSubmit() {
    event.preventDefault();
    let filters = Object.assign({}, this.state.filter);
    this.props.fetchTasks(filters)
  }

  renderInputs(array, key) {
    let inputs = array.map((el, i) => {
      let ids = this.state.filter[key];
      let id = key === 'status' ? el : el.id 
      let label = key === 'user_id' ? el.name : el;
      label = key === 'project_id' ? el.title : label;

      return ( 
        <li key={i}>
          <input type="checkbox" checked={ids.includes(id)} onChange={() => this.handleChange(key, id)} />
          <label>{titleize(label)}</label>
        </li>
      )
    });
    return inputs;
  }

  expandFilter(filter) {
    // debugger
    this.setState({ expanded: { ...this.state.expanded, [filter]: !this.state.expanded[filter] } })
  }

  renderFilter(filter, count, inputs) {
    return (
      <div className="filter">
        <h4 onClick={() => this.expandFilter(filter)}>{`${filter}${count}`}</h4>
        {this.state.expanded[filter] ? (
          <ul>
            {inputs}
          </ul>
        ) : null}
      </div>
    )
  }
 
  render() {
    let { currentUser } = this.props;

    let teammates = this.renderInputs(currentUser.teammates, "user_id");
    let projects = this.renderInputs(currentUser.projects, "project_id");
    let statuses = this.renderInputs(["Not Started", "In Progress", "Finished"], "status");
    let countUserFilters = this.state.filter.user_id.length > 0 ? ` (${this.state.filter.user_id.length})` : '';
    let countProjectFilters = this.state.filter.project_id.length > 0 ? ` (${this.state.filter.project_id.length})` : '';
    let countStatusFilters = this.state.filter.status.length > 0 ? ` (${this.state.filter.status.length})` : '';
    let userFilter = this.renderFilter('Owner', countUserFilters, teammates);
    let projectFilter = this.renderFilter('Project', countProjectFilters, projects);
    let statusFilter = this.renderFilter('Status', countStatusFilters, statuses);
    return (
      <div id="task-filter" className="filters">
        { userFilter }
        { projectFilter}
        { statusFilter}
        {/* <div className="filter">
          <h4 onClick={() => this.expandFilter('Owner')}>{`Owner${countUserFilters}`}</h4>
          { this.state.expanded.owner ? (
              <ul>
                { teammates }
              </ul>
          ) : null }
        </div> */}

        {/* <div className="filter">
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
        </div> */}

        <div>
          <h4>Due Date</h4>
          <DatePicker onChange={(event) => this.handleDateChange('start_date', event)} selected={new Date(this.state.filter.start_date)} />
          <DatePicker onChange={(event) => this.handleDateChange('end_date', event)} selected={new Date(this.state.filter.end_date)} />
        </div>

        <button onClick={() => this.handleSubmit()}>Apply</button>
      </div>  
    )
  }
}

export default TaskFilter;