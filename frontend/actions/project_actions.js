import * as ProjectAPI from '../util/project_api_util';

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_NEW_PROJECT = 'RECEIVE_NEW_PROJECT';
export const RECEIVE_NEW_PM = 'RECEIVE_NEW_PM';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';

export const receiveNewProject = payload => ({
  type: RECEIVE_NEW_PROJECT,
  payload
})

export const receiveProject = payload => ({
  type: RECEIVE_PROJECT,
  payload
})

export const receiveProjects = projects => {
  // debugger
  return {
    type: RECEIVE_PROJECTS,
    projects
  }
}

export const receiveNewPM = user => {
  
  return {
    type: RECEIVE_NEW_PM,
    user
  }
}

export const receiveErrors = errors => {
  return {
    type: RECEIVE_PROJECT_ERRORS,
    errors
  }
}

export const fetchProjects = () => dispatch => {
  return (
    ProjectAPI.fetchProjects()
      .then(projects => dispatch(receiveProjects(projects)),
            err => dispatch(receiveErrors(err.responseJSON)))
  )
}

export const fetchProject = (projectId) => dispatch => {
  return (
    ProjectAPI.fetchProject(projectId)
      .then(payload => dispatch(receiveProject(payload)),
            err => dispatch(receiveErrors(err.responseJSON)))
  )
}

export const createProject = (project, pm) => dispatch => {
  return (
    ProjectAPI.createProject(project, pm)
      .then(payload => dispatch(receiveProject(payload)), // changed to receiveProject
            err => dispatch(receiveErrors(err.responseJSON)))
  )
}

export const createPM = pm => dispatch => {
  return (
    ProjectAPI.createPM(pm)
      .then(user => dispatch(receiveNewPM(user)),
            err => dispatch(receiveErrors(err.responseJSON)))
  )
}

