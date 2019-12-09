
export const createPM = (pm) => {

  return $.ajax({
    method: 'POST',
    url: '/api/project_memberships',
    data: { pm }
  })
}

export const fetchPMs = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/project_memberships'
  })
}

export const updatePM = (pm) => {

  return $.ajax({
    method: 'PATCH',
    url: `api/project_memberships/${pm.id}`,
    data: { pm }
  })
}