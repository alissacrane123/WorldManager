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

// startDate and endDate are strings
export const selectTasksBetweenDates = (startDate, endDate, tasks) => {
  startDate = Date.parse(startDate);
  endDate = Date.parse(endDate);
  let selected = tasks.filter(task => {
  
    let dueDate = Date.parse(task.dueDate);
    return dueDate >= startDate && dueDate <= endDate
  });
  return selected;
}

export const selectUpcomingTasks = (tasks) => {
  let date = Date.now() + 12096e5;
  
  let upcoming = tasks.filter(task => date > Date.parse(task.due_date) && Date.now() <= Date.parse(task.due_date))

  return upcoming
}

export const selectOverdueTasks = (tasks) => {
  let past = tasks.filter(task => Date.now() > Date.parse(task.due_date))
  return past;
}

export const selectProjectTasks = (tasks) => {
  let projectTasks = {};

  tasks.forEach(task => {
    if (!task.project_id && !projectTasks[0]) {
      projectTasks[0] = [task]
    } else if (!task.project_id) {
      projectTasks[0].push(task);
    } else if (!projectTasks[titleize(task.project_name)]) {
      projectTasks[titleize(task.project_name)] = [task]
    } else {
      projectTasks[titleize(task.project_name)].push(task);
    }
  })

  return projectTasks
}


export const sortByUpdatedAt = (items) => {
  let sorted = items.sort((b, a) => new Date(a.updated_at) - new Date(b.updated_at));
  return sorted;
}

export const sortByDueDate = (tasks) => {
  // filter finished and overdue tasks 
  // debugger
  // let filterTasks = tasks.filter(task => task.status !== 'done' && Date.now() <= Date.parse(task.due_date));
  // tasks = filterTasks.sort((a, b) => new Date(a.due_date) - new Date(b.due_date));
  tasks = tasks.sort((a, b) => new Date(a.due_date) - new Date(b.due_date));
  return tasks;
}

export const selectAcceptedProjects = (state) => {
  let pms = Object.values(state.entities.pms).filter(pm => !pm.accepted && pm.user_id == state.session.id)
  let pmProjectIds = pms.map(pm => pm.project_id);
  let projects = Object.values(state.entities.projects).filter(project => !pmProjectIds.includes(project.id))
  return projects;
}


// fi
export const selectAcceptedTasks = (state) => {
  let pmProjectIds = Object.values(state.entities.pms).map(pm => pm.project_id);
  let tasks = Object.values(state.entities.tasks).filter(task => !pmProjectIds.includes(task.project_id))
  return tasks;
}

export const selectReminders = (tasks) => {
  let reminders = Object.values(tasks).filter(task => task.reminder && task.status != 'done')
  return reminders;
}

