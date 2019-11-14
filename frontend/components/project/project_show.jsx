import React from 'react';
import TaskIndexCont from '../task/task_index_cont'
import { titleize } from '../../helpers/helper';

class ProjectShow extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.projectId);
  }

  render() {
    let { project } = this.props;

    if (!project) return null;


    return (
      <div id="project-show">
        <h1>{titleize(project.title)}</h1>

        <TaskIndexCont />

      </div>
    )
  }
}


export default ProjectShow;
