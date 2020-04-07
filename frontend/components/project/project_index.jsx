import React from 'react';
import ProjectIndexItem from './project_index_item';
import SVG from '../svg';

class ProjectIndex extends React.Component {
  
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    let { projects, openModal, acceptedProjects } = this.props;
    
    acceptedProjects = acceptedProjects.map(project => (
      <li key={project.id}>
        <ProjectIndexItem project={project} />

      </li>
    ))

    // debugger
    return (
      <ul id="project-index">
        <li>
          <ul className="project-item new">
            <div onClick={ () => openModal('newProject') }>
              <SVG h={60} w={60} fill="white" transform="scale(2.5)" name="plus" className="add-svg"/>
            </div>
            <label>New Project</label>
          </ul>

        </li>
        {acceptedProjects}


        
      </ul>
    )
  }
}


export default ProjectIndex;

