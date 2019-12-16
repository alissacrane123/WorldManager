import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.emptyPost
  }

  handleChange() {
    event.preventDefault()
    this.setState({ body: event.target.value })
  }

  handleSubmit() {
    event.preventDefault();
    let post = Object.assign({}, this.state);
    this.props.createPost(post)
      .then(this.props.closeModal);
  }

  render() {
    let { currentUser } = this.props;
    let initials = `${currentUser.fname[0]}${currentUser.lname[0]}`

    return (
      <form id="new-post" className="post">
        <h4>Create Post</h4>

        <div>
          <div className="initial-circle">{initials}</div>
          <textarea
            value={this.state.body}
            onChange={() => this.handleChange()}
            placeholder="What's on your mind?">
          </textarea>
        </div>

        {/* <div>
          tag friend
        </div> */}

        <button onClick={() => this.handleSubmit()}>Post</button>
      </form>
    )
  }
}

export default PostForm;