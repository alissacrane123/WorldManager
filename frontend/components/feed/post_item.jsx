import React from 'react';
import SVG from '../svg';
import { titleize } from '../../helpers/helper'

const PostItem = ({ post, project, task }) => {

  let header;
  let svg = <SVG h={8} w={8} name="round-tri" fill="gray" transform="scale(0.333)" rotate="rotate(90)" />;
  if (task) {
    header = (
      <header>
        <h4>{post.author}</h4>
        { svg }
        <h4>{titleize(project.title)}</h4>
        { svg }
        <h4>{titleize(task.title)}</h4>
      </header>
    )
    // header = [post.author, project.title, task.title].join(' => ')
  } else {
    header = (
      <header>
        <h4>{post.author}</h4>
        { svg }
        <h4>{titleize(project.title)}</h4>
      </header>
    )
  }

  return (
    <li id="post-item">
      <div>
        <SVG name="profile" fill="#45A29E" h={36} w={36} transform="scale(1.5)" />
        <div>
          {/* <h4>{header}</h4> */}
          { header }
          <h5>created at</h5>
        </div>
      </div>

      <p>{ post.body}</p>
    </li>
  )
}

export default PostItem;