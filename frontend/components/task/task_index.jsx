import React from 'react';
import TaskIndexItem from './task_index_item';
import ProjectTaskFilter from '../filters/project_task';
import SVG from '../svg';
import svgOps from '../svg_props';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    let { notStarted, inProgress, done } = this.props;
    let tasks = notStarted.concat(inProgress).concat(done);

    this.state = { tasks: tasks };
  }

  handleMouseOver(taskId) {
    let task = document.getElementById(`ti-${taskId}`);
    task.classList.toggle('close');
  }

  renderTasks(i) {
    let { notStarted, inProgress, done, userFilter, adminAccess, deleteTask, openModal } = this.props;
    let tasks = [ notStarted, inProgress, done ];
    let taskStatus = ["todo", "doing", "done"];

    if (userFilter) {
      tasks = tasks[i].filter(task => task.user_id === userFilter);
    } else {
      tasks = tasks[i];
    }
    
    tasks = tasks.map(task => {
      if (task.draggable) {
        return (
          <li key={task.id} onDragStart={(e) => this.onDragStart(e, task.id)} className="draggable" draggable>
            
            <TaskIndexItem openModal={openModal} task={task} adminAccess={adminAccess} deleteTask={deleteTask}/>
          </li>
        )
      } else {
        let taskId = task.id;

        return (
          <li key={task.id} onMouseOver={() => this.handleMouseOver(taskId)} onMouseOut={() => this.handleMouseOver(taskId)}>
            <div className="ti close" id={`ti-${taskId}`}>
              <SVG name="warn" h={24} w={24} className="warn"/>
              <h5>You can only move tasks that belong to you!</h5>
            </div>
            <TaskIndexItem openModal={openModal} task={task} adminAccess={adminAccess}/>
          </li>         
        )
      }
    })

    let status = taskStatus[i];

    return (
      <section className="droppable"
        onDragOver={(e) => this.onDragOver(e)}
        onDrop={(e) => this.onDrop(e, status)}>
        <h3>{ status }</h3>
        <ul>
          { tasks }
        </ul>
      </section>
    )
  }

  onDrop(e, status) {
    // debugger
    let { notStarted, inProgress, done } = this.props;
    let tasks = notStarted.concat(inProgress).concat(done);

    let id = e.dataTransfer.getData("id");
    // this.state.tasks.forEach(task => {
    tasks.forEach(task => {
      if (task.id == id) {
        task = Object.assign(task, { status: status });
        this.props.updateTask(task)
      }

    });
  }

  onDragOver(e) {
    e.preventDefault();
  }

  onDragStart(e, id) {
    console.log('dragstart', id);
    e.dataTransfer.setData("id", id);
  }


  render() {
    let { users, currentUserId, updateFilter, userFilter } = this.props;

    return (
      <div id="task-index" className="container-drag index">

        <header>
          <ProjectTaskFilter users={users} currentUserId={currentUserId} updateFilter={updateFilter} userFilter={userFilter}/>       
          <button className="blue-btn" onClick={() => this.props.openModal('newProjectTasks')}>
            <SVG name="plus"  {...svgOps["12"]} fill="white" />
            <label>New Task</label>
          </button>
  
        </header>

        <div>
          {this.renderTasks(0)}
          {this.renderTasks(1)}
          {this.renderTasks(2)}
        </div>
      </div>
    );
  }
}


export default TaskIndex;
