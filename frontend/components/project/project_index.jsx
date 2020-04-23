import React from 'react';
import ProjectIndexItem from './project_index_item';
import SVG from '../svg';

class ProjectIndex extends React.Component {
  
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    let { projects, cn, search, openModal, acceptedProjects } = this.props;

    if (search) {
      acceptedProjects = acceptedProjects.filter(proj => (
        proj.title.toLowerCase().startsWith(search.toLowerCase())
      ))
    }
    
    let items = acceptedProjects.map(project => (
      <li key={project.id}>
        <ProjectIndexItem project={project} />

      </li>
    ));

    // debugger
    return (
      <ul id="project-index" className={cn}>
        <li>
          <ul className="project-item new">
            <div onClick={ () => openModal('newProject') }>
              <SVG h={60} w={60} fill="white" transform="scale(2.5)" name="plus" className="add-svg"/>
            </div>
            <label>New Project</label>
          </ul>

        </li>
        {items}


        
      </ul>
    )
  }
}


export default ProjectIndex;

