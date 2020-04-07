import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { titleize } from '../../helpers/helper';
import { formatJavascriptDate } from '../../helpers/date_helper';
import SVG from '../svg';



class TaskFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: this.props.defaultFilter,
      expanded: { Owner: false, Project: false, Status: false }
    }

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let filter = Object.assign({}, this.state.filter);
    // debugger
    this.props.fetchTasks(filter)
      // .then(this.props.updateFilter('tasks', filter))
  }

  handleChange(field, value, filter) {
    if (!this.state.filter[field].includes(value)) {
      this.setState({ filter: { ...this.state.filter, [field]: [...this.state.filter[field], value] } }, this.handleSubmit)
    } else {
      let newArr = this.state.filter[field].filter(id => id !== value)
      this.setState({ filter: { ...this.state.filter, [field]: newArr } }, this.handleSubmit)
    }

    this.setState({ expanded: { ...this.state.expanded, [filter]: false}})
  }

  handleDateChange(date, event) {
    let newDate = formatJavascriptDate(event);
    this.setState({ filter: { ...this.state.filter, [date]: newDate } }, this.handleSubmit)
  }

  handleSubmit() {
    let filters = Object.assign({}, this.state.filter);
    this.props.fetchTasks(filters)
  }

  expandFilter(filter) {
    this.setState({ expanded: { ...this.state.expanded, [filter]: !this.state.expanded[filter] } })
  }

  renderFilter(filter, inputs ) {
    let cn = this.state.expanded[filter] ? 'dd' : 'hide';

    let selected = this.getSelected(filter).map((el, i) => {
      let key = filter === 'Project' ? "title" : "name";
      return (
        <li className="selected" key={i}>
          <label>{el[key]}</label>
          <div><SVG name="x" h="12" w="12" transform="scale(0.5)"fill="black"/></div>
        </li>
      )
    })

    let cnSel = selected.length > 0 ? 'no-b' : 'header'

    return (
      <div className="filter">
        <div onClick={() => this.expandFilter(filter)} className={cnSel}>
          <h4 >{filter}</h4>
        </div>

        <ul className={cn}>
          {inputs}
        </ul>

        <ul className={cnSel}>
          {selected}
        </ul>

      </div>
    )
  }

  getSelected(filter) {
    let { user_id, project_id, status, unnassigned } = this.state.filter;
    let { teammates, projects } = this.props.currentUser;
    let selected;
    if (filter === 'Owner') {
      selected = teammates.filter(el => user_id.includes(el.id))
    } else if (filter === 'Project') {
      selected = projects.filter(el => project_id.includes(el.id))
      unnassigned ? selected.push({title: 'Unnassigned'}) : null
    } else {
      selected = status.map(stat => { return { name: stat } })
    }
    return selected;
  }

  renderInputs(array, key, filter) {
    let { unnassigned } = this.state.filter;
    let inputs = array.map((el, i) => {
      let ids = this.state.filter[key];
      let id = key === 'status' ? el : el.id
      let label = key === 'user_id' ? el.name : el;
      label = key === 'project_id' ? el.title : label;

      return (
        <li key={i}>
          <input type="checkbox" checked={ids.includes(id)} onChange={() => this.handleChange(key, id, filter)} />
          <label>{titleize(label)}</label>
        </li>
      )
    });

    if (key === 'project_id') {
      inputs.push(
        <li key={900}>
          <input type="checkbox" checked={unnassigned} onChange={() => this.handleChange('unnassigned', !unnassigned, filter)} />
          <label>Unnassigned</label>
        </li>
      )
    }
    return inputs;
  }

  render() {
    let { currentUser } = this.props;

    let teammates = this.renderInputs(currentUser.teammates, "user_id", "Owner");
    let projects = this.renderInputs(currentUser.projects, "project_id", "Project");
    let statuses = this.renderInputs(["todo", "doing", "done"], "status", "Status");
    let userFilter = this.renderFilter('Owner', teammates);
    let projectFilter = this.renderFilter('Project', projects);
    let statusFilter = this.renderFilter('Status', statuses);

    return (
      <div id="task-filter">

          {userFilter}
          {projectFilter}
          {statusFilter}

          <div className="dates">
            <h4>Due Date</h4>
            <DatePicker onChange={(event) => this.handleDateChange('start_date', event)} selected={new Date(this.state.filter.start_date)} />
            <DatePicker onChange={(event) => this.handleDateChange('end_date', event)} selected={new Date(this.state.filter.end_date)} />
          </div>


      </div>  
    )
  }

}

export default TaskFilter;