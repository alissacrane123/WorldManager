import React from 'react';
import { titleize } from "../../helpers/helper";
import { timeSince } from "../../helpers/date_helper";

const AlertItem = ({item, i, currentUserId}) => {
  if (item.inviterName) {
    let el = <label>Accepted</label>
    let text = <div>{item.inviterName} <span>invited you to</span> {titleize(item.projectName)}</div>
    if (!item.accepted && item.user_id === currentUserId) {
      el = (
        <button className="accept-btn" onClick={() => this.handleClick(item.id)}>
          Accept
        </button>
      );
    } else if (item.inviter_id === currentUserId) {
      el = <label>{timeSince(item.updated_at, true)}</label>;
      text = <div>{item.inviteeName} <span>accepted your invite to</span> {titleize(item.projectName)}</div>
    }

    return (
      <li className="notify__item">
        {text}
        {el}
      </li>
    )
  } else {
    let el = <div><span>New </span>{item.project_name} <span>item: </span> {item.title}</div>
    return (
      <li className="notify__item">
        {el}
      </li>)
  }
}

export default AlertItem;