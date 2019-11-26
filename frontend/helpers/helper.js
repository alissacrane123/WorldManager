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
    let month = 1 + date.getMonth();
    if (month > 12) {
      month = 1;
      year = year + 1;
    }
    month = month > 9 ? month : `0${month}`;

    let day = date.getDate()
    day = day > 9 ? day : `0${day}`;

    return `${month}/${day}/${year}`;
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

export const dateInOneWeek = () => {
  let today = new Date();
  let nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
  let month = nextweek.getMonth() + 1;
  let year = nextweek.getFullYear();
  let day = nextweek.getDate();

  if (month > 12) {
    month = 1;
    year = year + 1;
  } 

  if (month < 10) {
    month = `0${month}`
  } 

  if (day < 10) {
    day = `0${day}`
  }
  
  let nextweekStr = `${month}/${day}/${year}`;
  return nextweekStr;
}

export const sortByDueDate = (tasks) => {
  tasks = tasks.sort((a, b) => new Date(a.due_date) - new Date(b.due_date));

  return tasks;
}