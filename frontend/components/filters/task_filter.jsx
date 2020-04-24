import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { titleize } from '../../helpers/helper';
import { formatJavascriptDate, dateInOneWeek } from '../../helpers/date_helper';
import SVG from '../svg';
import svgOps from '../svg_props';


class TaskFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: this.props.defaultFilter,
      expanded: { Owner: false, Project: false, Status: false, date: false }
    }

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.expandFilter = this.expandFilter.bind(this);
  }

  componentDidMount() {
    let filter = Object.assign({}, this.state.filter);
    let today = formatJavascriptDate(new Date())
    let date = dateInOneWeek();
    this.props.fetchTasks(filter)
      .then(this.props.updateFilter('tasks', { startDate: today, endDate: date }))
      // .then(this.props.updateFilter('tasks', filter))
  }

  handleChange(field, value, filter) {
    // debugger
    if (field == 'unassigned') {
      this.setState({ filter: { ...this.state.filter, unassigned: !this.state.filter.unassigned } }, this.handleSubmit)
    } else if (!this.state.filter[field].includes(value)) {
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
    // debugger
    let { filterStart, filterEnd, fetchTasks,fetchFilterTasks, updateFilter } = this.props;
    let { start_date, end_date} = this.state.filter;
    let filters = Object.assign({}, this.state.filter);
    fetchFilterTasks(filters)
      .then(() => {
        if (start_date != filterStart || end_date != filterEnd) {
          updateFilter('tasks', {startDate: start_date, endDate: end_date})
        }
      })
  }

  expandFilter(filter) {
    let filters = Object.keys(this.state.expanded);
    let others = filters.filter(el => el != filter);
    let obj = {}
    others.forEach(el => obj[el] = false);
    // debugger
    // this.setState({ expanded: { ...this.state.expanded, [filter]: !this.state.expanded[filter] } })
    this.setState({ expanded: { ...obj, [filter]: !this.state.expanded[filter]} })
  }

  renderFilter(filter, inputs ) {
    let cn = this.state.expanded[filter] ? 'dd' : 'hide';

    let selected = this.getSelected(filter).map((el, i) => {
      let key = filter === 'Project' ? "title" : "name";
      
      return (
        <li className="selected" key={i}>
          <label>{el[key]}</label>
          <div><SVG name="x"  {...svgOps["12"]}fill="black"/></div>
        </li>
      )
    })

    let cnSel = selected.length > 0 ? 'no-b' : 'header'
    let rotate = cn === 'hide' ? '' : 'rotate(180)'
    return (
      <div className="filter">
        <div onClick={() => this.expandFilter(filter)} className={cnSel}>
          <h4 >{filter}</h4>
          <SVG name="skinny-down" h={12} w={12} rotate={rotate}  fill="gray" transform="scale(0.5)" />
        </div>

        <ul className={cn}>
          {inputs}
        </ul>

      </div>
    )
  }

  getSelected(filter) {
    let { user_id, project_id, status, unassigned } = this.state.filter;
    let { teammates, projects } = this.props.currentUser;
    let selected;
    if (filter === 'Owner') {
      selected = teammates.filter(el => user_id.includes(el.id))
    } else if (filter === 'Project') {
      selected = projects.filter(el => project_id.includes(el.id))
      unassigned ? selected.push({title: 'Unassigned'}) : null
    } else {
      selected = status.map(stat => { return { name: stat } })
    }
    return selected;
  }

  renderInputs(array, key, filter) {
    let { unassigned } = this.state.filter;
    let ids = this.state.filter[key];
    let notSelected = [];
    let selected = [];
    array.forEach(el => {
      let id = key === 'status' ? el : el.id;
      if (ids.includes(id)) {
        selected.push(el);
      } else {
        notSelected.push(el);
      }
    })

    let ordered = selected.concat(notSelected);

    let inputs = array.map((el, i) => {
      let id = key === 'status' ? el : el.id
      let label = key === 'user_id' ? el.name : el;
      label = key === 'project_id' ? el.title : label;

      let checked = (ids.includes(id) && !ids.includes('all')) || 
                    (!ids.includes(id) && ids.includes('all'))

      return (
        <li key={i}>
          <input 
            type="checkbox" 
            checked={checked} 
            onChange={() => this.handleChange(key, id, filter)} />
          <label>{titleize(label)}</label>
        </li>
      )
    });

    if (key === 'project_id') {
      inputs.push(
        <li key={900}>
          <input 
            type="checkbox" 
            checked={unassigned} 
            onChange={() => this.handleChange('unassigned', !unassigned, filter)} />
          <label>unassigned</label>
        </li>
      )
    }
    return inputs;
  }

  render() {
    let { currentUser, openModal } = this.props;

    let teammates = this.renderInputs(currentUser.teammates, "user_id", "Owner");
    let projects = this.renderInputs(currentUser.projects, "project_id", "Project");
    let statuses = this.renderInputs(["todo", "doing", "done"], "status", "Status");
    let userFilter = this.renderFilter('Owner', teammates);
    let projectFilter = this.renderFilter('Project', projects);
    let statusFilter = this.renderFilter('Status', statuses);

    let rotate = this.state.expanded.date ? 'rotate(180)' : '';
    return (
      <div id="task-filter">

          {userFilter}
          {projectFilter}
          {statusFilter}


        <div className="filter">
          <div onClick={() => this.expandFilter('date')} className="no-b">
            <h4>Due Dates</h4>
            <SVG name="skinny-down" h={12} w={12} rotate={rotate} fill="gray" transform="scale(0.5)" />

          </div>

          <ul className={this.state.expanded.date ? 'dd dates' : 'hide'}>
            <li>
              <DatePicker 
                onChange={(event) => this.handleDateChange('start_date', event)} 
                selected={new Date(this.state.filter.start_date)} />
              <p>-</p>
              <DatePicker 
                onChange={(event) => this.handleDateChange('end_date', event)} 
                selected={new Date(this.state.filter.end_date)} />
            </li>
          </ul>

        </div>

        <button className="blue-btn" onClick={() => openModal('newTasks')}>
          <SVG name="plus" {...svgOps["12"]} fill="white" />
          <label>New Task</label>
        </button>

      </div>  
    )
  }

}

export default TaskFilter;