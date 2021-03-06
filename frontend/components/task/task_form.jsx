import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatJavascriptDate } from '../../helpers/date_helper';
import SVG from '../svg';
import { titleize } from '../../helpers/helper';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { newTask: this.props.emptyTaskObj, tasks: [] };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleChange(field) {
    let newValue = event.target.value 
    if (field === 'user_id' || field === 'project_id') {
      newValue = Number(newValue);
    }
    this.setState({ newTask: { ...this.state.newTask, [field]: newValue } });
  }

  handleDateChange(date) {
    this.setState({ newTask: { ...this.state.newTask, due_date: date } });
  }

  createTask() {
    event.preventDefault();
    let task = Object.assign({}, this.state.newTask);
    let newDate = formatJavascriptDate(task.due_date);
    let newTask = Object.assign(task, { due_date: newDate })
 
    this.props.createTask(task)
      .then((promise) => this.resetState(promise))
  }

  resetState(promise) {
    let task = Object.values(promise.task)[0]
    
    this.setState({ tasks: [...this.state.tasks, task]})
    this.setState({ newTask: this.props.emptyTaskObj })
  }

  handleSubmit() {
    let { closeModal, history, projectId} = this.props;
    event.preventDefault();
    closeModal();
    if (projectId) {
      history.push(`/projects/${projectId}`);
    }
  }

  formatUsers() {
    let { users, currentUser } = this.props;
    let { user_id } = this.state.newTask
    
    users = users.map((user, i) => {

      let username = user.id === currentUser.id ? 'Me' : `${user.fname} ${user.lname}`;
      return (
        <option key={i} value={user.id}>{username}</option>
      )
    }) 

    return users;
  }

  renderProjectOptions() {
    let { projects } = this.props;
    let options = projects.map((item, i) => (
      <option value={item.id} key={i}>{titleize(item.title)}</option>
    ));

    return (

      <select value={this.state.project_id} onChange={() => this.handleChange('project_id')}>
        <option value={null} default>Unassigned</option>
        { options }
      </select>

    )
  }


  render() {
    let { project, tasks, projects, projectTask, closeModal, users, path } = this.props;

    if (!project && !path.includes('tasks') && path != '/') return null;
    

    let taskItems = this.state.tasks.map((task, i) => (
      <li key={i}>
        <label>{task.title}</label>
        <div>
          <SVG name="x" h={12} w={12} transform="scale(0.5)" fill="#6b6b6b" />
        </div>
      </li>
    ));

    let displayClass = tasks.length === 0 ? 'none' : '';

    return (
      <form className="task" id="task-form">
        <h4>Assign New Tasks</h4>

        <ul className={displayClass}>{taskItems}</ul>

        <div>
          <label>Title</label>
          <input
            type="text"
            value={this.state.newTask.title}
            onChange={() => this.handleChange("title")}
          />

          <label className={projectTask ? 'hide' : ''}>Project</label>
          {projectTask ? null : this.renderProjectOptions()}

          <label>Assignee</label>
          <select defaultValue={this.state.newTask.user_id} onChange={() => this.handleChange('user_id')} >

            { this.formatUsers() }
          </select>


          <label>Due Date</label>
          <DatePicker
            onChange={this.handleDateChange}
            selected={this.state.newTask.due_date}
          />

          <label>Description</label>
          <textarea
            type="text"
            value={this.state.newTask.description}
            onChange={() => this.handleChange("description")}
          ></textarea>

          <label>Priority</label>

          <ul>
            <input type="radio" name="rad" defaultChecked/>
            <div>Low</div>
            <input type="radio" name="rad" />
            <div>Medium</div>
            <input type="radio" name="rad" />
            <div>High</div>
          </ul>

          <button onClick={() => this.createTask()}>Assign Task</button>

        </div>

        <button onClick={ this.handleSubmit }>Done</button>
      </form>
    );
  }
}

export default withRouter(TaskForm);
