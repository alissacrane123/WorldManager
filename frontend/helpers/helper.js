export const titleize = (string) => {
  let otherWords = [ "and", "a", "or", "for"];
  let words = string.split(' ');
  
  let newWords = words.map((el, i) => {
    if (otherWords.includes(el) && i !== 0) {
      return el;
    } else if (el.length === 0) {
      return el;
    } else {
      return el[0].toUpperCase() + el.slice(1);
    }
  });
  return newWords.join(' ');
}

export const selectNewProjectId = (projects) => {
  let ids = Object.keys(projects);
  return Math.max(...ids); // most recent
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


export const timeSince = (date) => {

  let seconds = Math.floor((new Date() - new Date(date)) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
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
  
  tasks = tasks.sort((a, b) => b.id - a.id )
  return tasks.slice(0, 5);
}

export const selectUpcomingTasks = (tasks) => {
  let date = Date.now() + 12096e5;
  
  let upcoming = tasks.filter(task => date > Date.parse(task.due_date) && Date.now() <= Date.parse(task.due_date))
  // debugger
  return upcoming
}

export const selectOverdueTasks = (tasks) => {
  let past = tasks.filter(task => Date.now() > Date.parse(task.due_date))
  return past;
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

export const selectAcceptedProjects = (state) => {
  let pmProjectIds = Object.values(state.entities.pms).map(pm => pm.project_id);
  let projects = Object.values(state.entities.projects).filter(project => !pmProjectIds.includes(project.id))
  return projects;
}

export const selectAcceptedTasks = (state) => {
  let pmProjectIds = Object.values(state.entities.pms).map(pm => pm.project_id);
  let tasks = Object.values(state.entities.tasks).filter(task => !pmProjectIds.includes(task.project_id))
  return tasks;
}