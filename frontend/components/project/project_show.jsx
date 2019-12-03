import React from 'react';
import TaskIndexCont from '../task/task_index_cont'
import { titleize } from '../../helpers/helper';
import SVG from '../svg';

class ProjectShow extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.projectId);
  }

  handleDelete() {
    event.preventDefault();
    this.props.deleteProject(this.props.project.id)
      .then(() => this.props.history.push('/'))
  }

  render() {
    let { project, openModal, deleteProject} = this.props;

    if (!project) return null;


    return (
      <div id="project-show">
        <div>
          <h1>{titleize(project.title)}</h1>
          <div onClick={() => openModal('newTasks')}>
            <SVG name='plus' h={20} w={20} fill="white" transform="scale(0.84)" className="plus-show" />
          </div>

          <div onClick={() => this.handleDelete()}>
            <SVG className="trash" name="trash" h={24} w={24} fill="gray" />
          </div>
        </div>

        <TaskIndexCont />

      </div>
    )
  }
}


export default ProjectShow;
