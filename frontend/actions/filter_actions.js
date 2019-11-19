export const UPDATE_USER_FILTER = 'UPDATE_USER_FILTER';

//  entity = 'tasks', value = {user: userId }

export const updateUserFilter = (entity, value)  => {

  return {
    type: UPDATE_USER_FILTER,
    entity, value
  }
}