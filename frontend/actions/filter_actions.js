export const UPDATE_FILTER = 'UPDATE_FILTER';

//  entity = 'tasks', value = {user: userId }

export const updateFilter = (entity, value)  => {

  return {
    type: UPDATE_FILTER,
    entity, value
  }
}