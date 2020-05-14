import React from 'react';
import { titleize } from "../../helpers/helper";
import { timeSince } from "../../helpers/date_helper";

const AlertItem = ({item, pms, updatePM, closeDD,currentUserId}) => {

  function handleClick(pmId) {
    event.preventDefault();
    event.stopPropagation();
    let pm = pms.filter(pm => pm.id === pmId)[0]
    let newPm = Object.assign({}, pm, { accepted: true });
    updatePM(newPm);
    closeDD();
  }

  let cn;
  let timeAgo = timeSince(item.updatedAt);
  let time = parseInt(timeAgo.split(' ')[0]);
  if (timeAgo.includes("sec") && time < 5) {
    cn = 'notify__item new'
  } else {
    cn = 'notify__item'
  }

  if (item.inviterName) {
    let el, text;
    if (!item.accepted && item.user_id === currentUserId) {
      text = <div><span>{item.inviterName} </span>invited you to<span> {titleize(item.projectName)}</span></div>
      el = (
        <button className="accept-btn" onClick={() => handleClick(item.id)}>
          Accept
        </button>
      );
    } else if (item.inviter_id === currentUserId) {
      el = <label>{timeSince(item.updated_at, true)}</label>;
      text = <div><span>{item.inviteeName} </span>accepted your invite to<span> {titleize(item.projectName)}</span></div>
    } else {
      text = <div>You accepted<span> {`${item.inviterName}'s `}</span>invite to<span> {titleize(item.projectName)}</span></div>;
      el = <label>{timeSince(item.updated_at, true)}</label>;
    }

    return (
      <li className={cn}>
        {text}
        {el}
      </li>
    )
  } else {
    // let el = <div>New <span>{item.project_name}</span> Task:<span> {item.title}</span></div>
    let label = <label>{timeSince(item.updatedAt, true)}</label>;
    let el = <div>New <span>{item.project_name}</span> Task:<span> {item.title}</span></div>
    return (
      <li className={cn}>
        {el}
        {label}
      </li>)
  }
}

export default AlertItem;