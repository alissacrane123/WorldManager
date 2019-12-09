import React from 'react';
import SVG from '../svg';
import { dateToWords, titleize } from '../../helpers/helper';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatJavascriptDate } from '../../helpers/helper';

class TaskModalItem extends React.Component {
  constructor(props) {
    super(props);
    let { tasks, taskId  } = this.props;
    let task = Object.assign({}, tasks[taskId], {new_date: tasks[taskId].dueDate});
    this.state = task;
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  editValue(id) {
    let el = document.getElementById(id);
    el.classList.remove('hide')
  }
  
  handleDateChange(date) {
    
    this.setState({ new_date: date })
  }

  handleChange(field) {
    event.preventDefault();
    let otherStatus = this.state.status === 'Finished' ? 'In Progress' : 'Finished';
    let newValue = field === 'status' ? otherStatus : event.target.value;
    
    this.setState({ [field]: newValue });
  }

  handleSubmit() {
    event.preventDefault();
    // debugger
    let newTask = Object.assign({}, this.state)

    if (!this.state.new_date.length) {
      newTask = Object.assign(newTask, { new_date: formatJavascriptDate(this.state.new_date) })
    }
    
    this.props.updateTask(newTask)
      .then(() => this.props.closeModal())
  }
  
  render() {
    let { tasks, taskId, closeModal } = this.props;

    let task = tasks[taskId];

    let statusSvg, statusColor, statusTxt, color;
    if (this.state.status === 'Finished') {
      statusSvg = 'x';
      statusTxt = 'Completed'
      statusColor = 'status green';
      color = "#45a29e";
    } else {
      statusSvg = 'check';
      statusColor = 'status red'
      statusTxt = 'Incomplete';
      color = "gray"
    }

    return (
      <div id="modal-task"> 
        <section>
          <h1>{titleize(task.title)}</h1>
          <div onClick={() => this.handleChange('status')} className={statusColor}>
            { statusTxt}
            {/* <SVG name="done" rule="evenodd" h={18} w={18} fill={color} transform="scale(0.75)" /> */}
          </div>
          {/* <div onClick={() => this.handleChange('status')} className={statusColor}>
            <SVG name={statusSvg} h={12} w={12} fill="#6f7782" transform="scale(0.5)" className="mt-svg2" />
            { statusTxt }
          </div> */}
          
        </section>
  
        <section>
          <div>
            <div>{task.ownerInitials}</div>
            <div>
              <label>Assigned To</label>
              <div>{task.owner}</div>
            </div>

            {/* <SVG h={12} w={12} transform="scale(0.5)" name="edit" fill="#45A29E" /> */}
          </div>
  
          <div>
            <div><SVG name="cal" h={12} w={12} fill="white" transform="scale(0.5)" /></div>
            <div className="editable" onClick={() => this.editValue('tmi-date')}>
              <label>Due Date</label>
              <div>{dateToWords(task.dueDate).split(',')[0]}</div>
              <div id="tmi-date" className="hide">
                <DatePicker
                  onChange={this.handleDateChange}
                  selected={new Date(this.state.new_date)}
                />
              </div>
            </div>
          </div>
  
          <div>
            <div><SVG name="project" h={12} w={12} fill="white" transform="scale(0.5)" /></div>
            <div>
              <label>Project</label>
              <div>{task.project_name ? titleize(task.project_name) : "Unassigned"}</div>
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