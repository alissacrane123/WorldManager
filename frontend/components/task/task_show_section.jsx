import React from 'react';
import SVG from '../svg';
import { titleize } from '../../helpers/helper';

const TaskShowSection = ({ filter, tasks }) => {

  tasks = tasks.map((task, i) => {
    let svgName = task.status === 'Finished' ? 'done' : 'not-done';

    return (
      <li key={i}>
        <div>
          <SVG name={svgName} rule="evenodd" h={18} w={18} fill="gray" transform="scale(0.75)" />
        </div>

        {/* <div>
          <SVG name={task.project_cat} h={18} w={18} fill="#45A29E" transform="scale(0.75)" />
        </div> */}
        
        <h4>{titleize(task.title)}</h4>
        <div>{titleize(task.project_name)}</div>
      </li>
  )});

  return (
    <div id="task-section">
      <label>{`${filter} Tasks`}</label>
      <ul>
        {tasks}
      </ul>

    </div>
  )
}

export default TaskShowSection;