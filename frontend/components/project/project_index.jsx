import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {
  
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    let { projects } = this.props;

    projects = projects.map(project => (
      <li key={project.id}>
        <ProjectIndexItem project={project} />
      </li>
    ))

    
    return (
      <ul className="project-index">
        {projects}

        
      </ul>
    )
  }
}


export default ProjectIndex;

