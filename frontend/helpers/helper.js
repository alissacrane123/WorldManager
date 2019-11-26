export const titleize = (string) => {
  let otherWords = [ "and", "a", "or", "for"];
  let words = string.split(' ').map((el, i) => {
    if (otherWords.includes(el) && i !== 0) {
      return el;
    } else {
      return el[0].toUpperCase() + el.slice(1);
    }
  });
  return words.join(' ');
}

export const formatJavascriptDate = (date) => {
    let year = date.getFullYear();

    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    let day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return month + "/" + day + "/" + year;
}

export const dateToWords = (string) => {
  let months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  
  let arr = string.split('/');
  let month = months[Number(arr[0]) - 1];
  let day = arr[1];
  let year = arr[2];

  return `${month} ${day}, ${year}`;
}

export const projectMemberSelector = (state) => {
  let users = Object.values(state.entities.users);
  let sessionId = state.session.id 
  users = users.filter(user => user.id !== sessionId)
  // users = users.map(user => user.fname)
  return users;
}

export const selectRecentTasks = (tasks) => {
  // debugger
  tasks = tasks.sort((a, b) => b.id - a.id )

  return tasks.slice(0, 5);
}

export const selectUpcomingTasks = (tasks) => {
  let date = Date.now() + 12096e5;
  tasks = tasks.filter(task => date > Date.parse(task.due_date))


  return tasks
}