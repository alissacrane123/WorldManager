import React from 'react';
import SVG from '../svg';
import TaskShowItemContainer from './task_show_item_cont';
import { sortByDueDate } from '../../helpers/helper';
import svgOps from '../svg_props';

class TaskSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({  open: !this.state.open })
  }

  render() {
      let { tasks, filter, header, showBtn, openModal } = this.props;
      let overdue = filter == 'Overdue' ? true : false;
    
      tasks = sortByDueDate(tasks);

      tasks = filter == 'Upcoming' ? tasks.filter(task => task.status != 'done') : tasks;
    
      let taskItems = tasks.map((task, i) => (
        <TaskShowItemContainer key={i} task={task} overdue={overdue}/>
      ));
    
      if (!header) {
        header = `${filter} Tasks`;
      }

      let cn = this.state.open ? '' : 'hide';
      let rotate = this.state.open ?  'rotate(90)' : '';
      // let button = !showBtn ? null : (
      //   <button className="blue-btn" onClick={() => openModal('newTasks')}>
      //     <SVG name="plus" {...svgOps["12"]} fill="white" />
      //     <label>New Task</label>
      //   </button>
      // )

      if (taskItems.length < 1) {
        taskItems = (
          <div className="no-items">
            <h3>None</h3>
            <SVG name="smile" {...svgOps["24nv"]} fill="#828991" />
          </div>
        )
      }
      
      return (
        <section className="task list">
          <div  >
            <div className="task__header" onClick={this.toggle}>
              <SVG name="carrot" {...svgOps["12"]} rotate={rotate} fill="gray"  />
              <h2 className="task-section__h2">{header}</h2>
            </div>
            {/* { button } */}
          </div>
          <ul className={cn}>
            {taskItems }
          </ul>
    
        </section>
      )

  }
}

export default TaskSection;