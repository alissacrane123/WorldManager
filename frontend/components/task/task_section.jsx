import React from 'react';
import SVG from '../svg';
import TaskShowItemContainer from './task_show_item_cont';

const TaskSection = ({ tasks, filter }) => {
  // debugger
  let taskItems = tasks.map((task, i) => (
    <TaskShowItemContainer key={i} task={task}/>
  ))
  
  return (
    <section className="task list">
      <div>
        <SVG name="carrot" h={12} w={12} rotate="rotate(90)" fill="gray" transform="scale(0.5)" />
        <h2>{`${filter} Tasks`}</h2>
      </div>
      <ul>
        {taskItems }
      </ul>

    </section>
  )
}

export default TaskSection;