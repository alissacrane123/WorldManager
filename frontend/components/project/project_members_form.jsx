import React from 'react';

class ProjectMembersForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', project_id: this.props.projectId, inviter_id: this.props.currentUserId };
  }

  handleSubmit() {
    event.preventDefault();
    let pm = Object.assign({}, this.state)

    this.props.createPM(pm)
      .then(() => this.setState({ email: ''}))
  }

  handleChange(field) {

    this.setState({ [field]: event.target.value })
  }

  render() {
    let { users, currentUserId, errors } = this.props;

    let members = users.map((user, i) => {
      let username = `${user.fname} ${user.lname}`
      return (
        <li key={i}>{username}</li>
      )
    })

    let errorEls = errors.map(err => <h3 className="error">{err}</h3>)


    return (
      <form className="task" id="pm-form">
        <h4>Add Team Members</h4>

        <ul>{members}</ul>

        <div>
          { errorEls.length ? errorEls : null }
          <label>Team Member Email</label>
          <input type="text"
            value={this.state.email}
            onChange={() => this.handleChange("email")} 
          />

          <button onClick={() => this.handleSubmit()}>Add Team Member</button>
        </div>

        <button onClick={() => this.props.openModal('newProjectTasks')}>Next</button>

      </form>
    )
  }
}

export default ProjectMembersForm;