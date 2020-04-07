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

export const getNextSunday = () => {
  let d = new Date();
  let num = d.setDate(d.getDate() + ((7 - d.getDay()) % 7 + 0) % 7);
  d = new Date(num)
  return formatJavascriptDate(d);
}

// can accept ruby date
export const timeSince = (date, weeks = false) => {

  let seconds = Math.floor((new Date() - new Date(date)) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (weeks) {
    let daysAgo = Math.floor(seconds / 86400)
    if (daysAgo > 6) {
      let weeksAgo = Math.floor(daysAgo / 7);
      return weeksAgo + "w";
    } else if (daysAgo >= 1) {
      return daysAgo + "d"
    }
  }

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
