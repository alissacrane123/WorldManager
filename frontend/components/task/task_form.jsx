import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = {
      tasks: [],
      newTask: this.props.emptyTaskObj
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addTask() {
    event.preventDefault();
    let newTask = this.state.newTask;
    this.setState({ tasks: [...this.state.tasks, newTask]})

    this.setState({ newTask: this.props.emptyTaskObj })
  }

  handleChange(field) {
    this.setState({newTask: { ...this.state.newTask, [field]: event.target.value }})
  }

  handleSubmit() {
    event.preventDefault();
    let tasks = this.state.tasks
    this.props.createTask(tasks).then(() => {
      this.props.closeModal();
      this.props.history.push(`/projects/${this.state.newTask.project_id}`)
    });
  }


  render() {
    let { currentUser, project } = this.props;
    
    if (!project) return null;

    let tasks = this.state.tasks.map((task, i) => (
      <ul key={i}>
        <li>{task.title}</li>
        <li>{task.email}</li>
        <li>{task.description}</li>
      </ul>
    ))


    return (
      <form className="task" id="task-form">
        <h4>Assign Tasks</h4>

        {tasks}

        <div>
          <input type="text" value={this.state.newTask.title} onChange={() => this.handleChange('title') } placeholder="Title"/>
          <input type="text" value={this.state.newTask.email} onChange={() => this.handleChange('email') } placeholder="email"/>
          <input type="text" value={this.state.newTask.description} onChange={() => this.handleChange('description') } placeholder="description"/>

          <button onClick={() => this.addTask()}>Add Task</button>
        </div>

        <button onClick={ () => this.handleSubmit() }>Submit All Tasks</button>

      </form>
    )
  }
}

export default withRouter(TaskForm);
