export const titleize = (string) => {
  let words = string.split(' ').map(el => el[0].toUpperCase() + el.slice(1))
  return words.join(' ');
}

export const projectMemberSelector = (state) => {
  let users = Object.values(state.entities.users);
  let sessionId = state.session.id 
  users = users.filter(user => user.id !== sessionId)
  // users = users.map(user => user.fname)
  return users;
}