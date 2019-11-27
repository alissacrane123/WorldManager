import React from 'react';
import SVG from '../svg';
import { dateToWords, titleize } from '../../helpers/helper';

class TaskModalItem extends React.Component {
  constructor(props) {
    super(props);
    let { tasks, taskId  } = this.props;
    let task = Object.assign({}, tasks[taskId]);
    this.state = task;
  }
  

  handleChange(field) {
    event.preventDefault();
    let otherStatus = this.state.status === 'Finished' ? 'In Progress' : 'Finished';
    let newValue = field === 'status' ? otherStatus : event.target.value;
    // debugger
    this.setState({ [field]: newValue });
  }

  handleSubmit() {
    event.preventDefault();
    let newTask = Object.assign({}, this.state)
    this.props.updateTask(newTask)
  }
  
  render() {
    let { tasks, taskId, closeModal } = this.props;

    let task = tasks[taskId];

    let statusSvg, statusColor, statusTxt;
    if (this.state.status === 'Finished') {
      statusSvg = 'x';
      statusTxt = 'Mark Incomplete'
      statusColor = 'red';
    } else {
      statusSvg = 'check';
      statusTxt = 'Mark Complete'
    }

    return (
      <div id="modal-task"> 
        <section>
          <h1>{titleize(task.title)}</h1>
          <div onClick={() => this.handleChange('status')} className={statusColor}>
            <SVG name={statusSvg} h={12} w={12} fill="#6f7782" transform="scale(0.5)" className="mt-svg2" />
            { statusTxt }
          </div>
          
        </section>
  
        <section>
          <div>
            <div>{task.ownerInitials}</div>
            <div>
              <label>Assigned To</label>
              <div>{task.owner}</div>
            </div>
          </div>
  
          <div>
            <div><SVG name="cal" h={12} w={12} fill="white" transform="scale(0.5)" /></div>
            <div>
              <label>Due Date</label>
              <div>{dateToWords(task.dueDate).split(',')[0]}</div>
            </div>
          </div>
  
          <div>
            <div><SVG name="project" h={12} w={12} fill="white" transform="scale(0.5)" /></div>
            <div>
              <label>Project</label>
              <div>{task.project_name ? titleize(task.project_name) : null}</div>
            </div>
          </div>
        </section>
  
  
        <section>
          <label>Description</label>
          <div>
            <div className="mt-svg"><SVG name="desc" h={18} w={18} fill="#6f7782" transform="scale(0.75)"/></div>
            <textarea onChange={() => this.handleChange('description')} value={this.state.description}></textarea>
          </div>
        </section>
  
        <div>
          <button onClick={() => closeModal()}>Cancel</button>
          <button onClick={() => this.handleSubmit()}>Save</button>
        </div>
  
      </div>
    )
  }
}

export default TaskModalItem;