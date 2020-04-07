import React from 'react';
import { titleize } from '../../helpers/helper';
import { daysAgo, timeSince} from '../../helpers/date_helper';
import SVG from '../svg';

const TaskIndexItem = ({ task, adminAccess, deleteTask, openModal }) => {

  
  let daysAgoStr = timeSince(task.created_at)
  let arrowColor = { "high": "red", "medium": "#ff7700", "low": "green"}

  let trashSVG = adminAccess ? <SVG className="trash"name="trash" h={18} w={18} fill="gray" transform="scale(0.75)"/> : <div></div>
  
  return (
    <div id="task-item">
      <div>
        <h4 onClick={() => openModal(`task${task.id}`)}>{titleize(task.title)}</h4>
        <SVG
          h={12}
          w={12}
          name="arrow"
          fill={arrowColor[task.priority]}
          rotate="rotate(-90)"
          transform="scale(0.5)"
        />
      </div>
      <div onClick={() => openModal(`task${task.id}`)}>
        <SVG h={18} w={18} name="cal" fill="gray" transform="scale(0.75)" />
        <label>{daysAgoStr}</label>
      </div>
      <div>
        <SVG h={18} w={18} name="profile" fill="gray" transform="scale(0.75)" />
        <label>{task.owner}</label>
      </div>

      <div id="trash" onClick={() => deleteTask(task.id)}>{trashSVG}</div>
    </div>
  );

}

export default TaskIndexItem;