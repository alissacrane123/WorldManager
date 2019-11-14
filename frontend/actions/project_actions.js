import * as ProjectAPI from '../util/project_api_util';

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';

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

export const fetchProjects = () => dispatch => {
  return (
    ProjectAPI.fetchProjects().then(projects => dispatch(receiveProjects(projects)))
  )
}

export const fetchProject = (projectId) => dispatch => {
  return (
    ProjectAPI.fetchProject(projectId).then(payload => dispatch(receiveProject(payload)))
  )
}

export const createProject = (project) => dispatch => {
  return (
    ProjectAPI.createProject(project).then(payload => dispatch(receiveProject(payload)))
  )
}


