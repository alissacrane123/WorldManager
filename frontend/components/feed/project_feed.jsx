import React from 'react';
import PostItem from './post_item';

class ProjectFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts({ project_id: this.props.projectId })
  }

  render()  {
    let { posts, currentUser, tasks, project } = this.props;
    let initials = `${currentUser.fname[0]}${currentUser.lname[0]}`

    posts = posts.map((post, i) => {
      let postTask = post.task_id ? tasks.filter(task => task.id === post.task_id)[0] : null;
      return (
        <PostItem key={i} post={post} project={project} task={postTask} initials={initials}/>
      )
    })
    
    return (
      <div id="project-feed" className="index feed">
        <form className="post">
          <h4>Create Post</h4>

          <div className="new-post">
            <div className="initial-circle">{initials}</div>
            <textarea  
              onClick={() => this.props.openModal('newPost')} 
              placeholder="What's on your mind?">
            </textarea>
          </div>
        </form>

        <ul>
          { posts }
        </ul>

      </div>
    )
  }
}

export default ProjectFeed;