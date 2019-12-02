import React from 'react';
import SVG from '../svg';
import { useHistory, withRouter } from 'react-router-dom'

import { titleize } from '../../helpers/helper';

const ProjectIndexItem = ({ project, history }) => {
  let svgName = project.category ? project.category.toLowerCase() : 'profile';

  return (
    <ul className="project-item" onClick={ () => history.push(`/projects/${project.id}`) } >

      <div>
        <SVG h={72} w={72} fill="white" transform="scale(3)" name={ svgName } />
      </div>

      <label>{ titleize(project.title) }</label>
    </ul>
  )
}

export default withRouter(ProjectIndexItem);