import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SVG from '../svg';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    
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

      <li key={i}>
        <label>{task.title}</label>
        <div>
          <SVG name="x" h={12} w={12} transform="scale(0.5)" fill="1F2833" />
        </div>
      </li>
    ));

    let displayClass = tasks.length === 0 ? 'none' : '';

    return (
      <form className="task" id="task-form">
        <h4>Assign New Tasks</h4>

        <ul className={displayClass}>
          {tasks}
        </ul>

        <div>
          <label>Title</label>
          <input type="text" value={this.state.newTask.title} onChange={() => this.handleChange('title') } />

          <label>Assignee's Email</label>
          <input type="text" value={this.state.newTask.email} onChange={() => this.handleChange('email') } />
          
          <label>Description</label>
          <textarea type="text" value={this.state.newTask.description} onChange={() => this.handleChange('description')} ></textarea>
          
          <label>Priority</label>

          <ul>
            <input type="radio" name="rad"/>
            <div>Low</div>
            <input type="radio" name="rad"/>
            <div>Medium</div>
            <input type="radio" name="rad"/>
            <div>High</div>
          </ul>

          <div onClick={() => this.addTask()}>
            <SVG name='plus' h={20} w={20} fill="white" transform="scale(0.84)" className="task-show" />
          </div>
        </div>


        <button onClick={ () => this.handleSubmit() }>Submit All Tasks</button>

      </form>
    )
  }
}

export default withRouter(TaskForm);
