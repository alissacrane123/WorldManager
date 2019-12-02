
export const fetchProjects = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/projects'
  })
}

export const fetchProject = (projectId) => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/${projectId}`
  })
}

export const createProject = (project, pm={} ) => {
  
  return $.ajax({
    method: 'POST',
    url: '/api/projects',
    data: { project, pm }
  })
}

export const createPM = (pm) => {

  return $.ajax({
    method: 'POST',
    url: '/api/project_memberships',
    data: { pm }
  })
}