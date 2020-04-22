import React from 'react';
import SVG from '../svg';
import TaskShowItemContainer from './task_show_item_cont';
import { sortByDueDate } from '../../helpers/helper';

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
      let { tasks, filter, header } = this.props;
      let overdue = filter == 'Overdue' ? true : false;
    
      tasks = sortByDueDate(tasks);
    
      let taskItems = tasks.map((task, i) => (
        <TaskShowItemContainer key={i} task={task} overdue={overdue}/>
      ));
    
      if (!header) {
        header = `${filter} Tasks`;
      }

      let cn = this.state.open ? '' : 'hide';
      let rotate = this.state.open ?  'rotate(90)' : '';
      
      return (
        <section className="task list">
          <div onClick={this.toggle}>
            <SVG name="carrot" h={12} w={12} rotate={rotate} fill="gray" transform="scale(0.5)" />
            {/* <h2>{`${filter} Tasks`}</h2> */}
            <h2>{header}</h2>
          </div>
          <ul className={cn}>
            {taskItems }
          </ul>
    
        </section>
      )

  }
}

export default TaskSection;