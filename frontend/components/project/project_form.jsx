import React from 'react';
import { connect } from 'react-redux';


class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { project: {title: '', category: 'default'}, pm: {email: '', role: '' }}

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleProjectChange(field) {
    this.setState({ project: { ...this.state.project, [field]: event.target.value } });
  }

  handlePmChange(field) {
    this.setState({ pm: { ...this.state.pm, [field]: event.target.value } });
  }

  handleSubmit(e) {
    e.preventDefault();
    let project = Object.assign({}, this.state.project);
    let pm = Object.assign({}, this.state.pm);

    this.props.createProject(project, pm)
      .then(() => this.props.openModal('newTasks'));
  }

  render() {

    let cats = ["School", "Work", "Travel", "Fun", "Family", "Other"].map((el, i) => (
      <option key={i} value={el}>{el}</option>
    ))

    return (
      <form className="project" id="project-form" onSubmit={ this.handleSubmit }>

        <h4>New Project Form</h4>

        <input type="text" placeholder="Title" value={this.state.title} onChange={() => this.handleProjectChange('title')}/>

        <select value={ this.state.category } onChange={ () => this.handleProjectChange('category') }>
          <option value="default" disabled={true}>Choose a category</option>
          { cats }
        </select>
        
        <input type="text" placeholder="email" onChange={() => this.handlePmChange('email')}/>
        <input type="text" placeholder="role" onChange={() => this.handlePmChange('role')} />


        <input type="submit" value="Create Project" />

      </form>
    )
  }
}

export default ProjectForm;
