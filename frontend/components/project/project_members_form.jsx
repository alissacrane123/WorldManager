import React from 'react';

class ProjectMembersForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', role: '', project_id: this.props.projectId };
  }

  handleSubmit() {
    event.preventDefault();
    let pm = Object.assign({}, this.state)
    this.props.createPM(pm)
      .then(() => this.setState({ email: '', role: '' }))
  }

  handleChange(field) {
    this.setState({ [field]: event.target.value })
  }

  render() {

    return (
      <form className="task" id="pm-form">
        <h4>Add Team Members</h4>

        <div>
          <label>Team Member Email</label>
          <input type="text"
            value={this.state.email}
            onChange={() => this.handleChange("email")} 
          />

          <label>Team Member Role</label>
          <select onChange={() => this.handleChange("role")}>
            <option value="Admin">Administrator</option>
            <option value="Member">Team Member</option>
          </select>

          <button onClick={() => this.handleSubmit()}>Submit</button>
        </div>

        <button onClick={() => this.props.openModal('newTasks')}>Next</button>

      </form>
    )
  }
}

export default ProjectMembersForm;