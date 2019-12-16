import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatJavascriptDate, titleize } from '../../helpers/helper';


class TaskFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      filter: this.props.defaultFilter,
      expanded: { owner: false, project: false, status: false} 
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
    })
    return inputs;
  }
 
  render() {
    let { currentUser } = this.props;

    let teammates = this.renderInputs(currentUser.teammates, "user_id")

    // let teammates = currentUser.teammates.map((mate, i) => (
    //   <li key={i}>
    //     <input type="checkbox" checked={this.state.filter.user_id.includes(mate.id)} onChange={() => this.handleChange('user_id',mate.id)}/>
    //     <label>{mate.name}</label>
    //   </li>
    // ))

    let projects = this.renderInputs(currentUser.projects, "project_id")

    // let projects = currentUser.projects.map((project, j) => {
    //   let ids = this.state.filter.project_id
    //   return (
    //     <li key={j}>
    //       <input type="checkbox" checked={ids.includes(project.id)} onChange={() => this.handleChange('project_id', project.id)} />
    //       <label>{project.title}</label>
    //     </li>
    // )})

    let statuses = this.renderInputs(["Not Started", "In Progress", "Finished"], "status")

    // let statuses = ["Not Started", "In Progress", "Finished"].map((stat, i) => (
    //   <li key={i}>
    //     <input type="checkbox" checked={this.state.filter.status.includes(stat)} onChange={() => this.handleChange('status', stat)} />
    //     <label>{stat}</label>
    //   </li>
    // ))

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
          <DatePicker onChange={(event) => this.handleDateChange('start_date', event)} selected={new Date(this.state.filter.start_date)} />
          <DatePicker onChange={(event) => this.handleDateChange('end_date', event)} selected={new Date(this.state.filter.end_date)} />
        </div>

        <button onClick={() => this.handleSubmit()}>Apply</button>
      </div>  
    )
  }
}

export default TaskFilter;