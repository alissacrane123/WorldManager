import React from 'react';
import TaskIndexCont from '../task/task_index_cont'
import ProjectFeedCont from '../feed/project_feed_cont';
import { titleize } from '../../helpers/helper';
import SVG from '../svg';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openTab: 'Tasks'}
  }

  componentDidMount() {
    this.props.fetchProject(this.props.projectId);
  }

  handleDelete() {
    event.preventDefault();
    this.props.deleteProject(this.props.project.id)
      .then(() => this.props.history.push('/'))
  }

  changeTab(tab) {
    event.preventDefault();
    this.setState({ openTab: tab })
  }

  render() {
    let { project, openModal, deleteProject} = this.props;

    if (!project) return null;

    let component;
    switch(this.state.openTab) {
      case 'Tasks':
        component =  <TaskIndexCont />
        break;
      case 'Feed':
        component = <ProjectFeedCont />;
        break;
      case 'People':
        component = <div>People</div>
        break;
    }

    let tabs = ['Tasks', 'Feed'].map((tab, i) => {
      let c = this.state.openTab === tab ? 'selected' : '';
      return (
        <li key={i} className={c} onClick={() => this.changeTab(tab)}>{tab}</li>
      )
    })


    return (
      <div id="project-show">
        <div className="proj-header">
          <h1>{titleize(project.title)}</h1>

          <div onClick={() => this.handleDelete()}>
            <SVG className="trash" name="trash" h={24} w={24} fill="gray" />
          </div>
        </div>

        <ul className="tabs">
          { tabs }
        </ul>


        { component }
        {/* <TaskIndexCont /> */}

      </div>
    )
  }
}


export default ProjectShow;
