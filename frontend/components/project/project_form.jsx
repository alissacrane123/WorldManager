import React from 'react';
import { connect } from 'react-redux';


class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', category: 'default'}

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ category: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let project = Object.assign({}, this.state);

    this.props.createProject(project);
  }

  render() {

    let cats = ["School", "Work", "Travel", "Fun", "Family", "Other"].map(el => (
      <option value={el}>{el}</option>
    ))

    return (
      <form className="project" id="project-form" onSubmit={ this.handleSubmit }>

        <h4>New Project Form</h4>

        <input type="text" placeholder="Title" value={this.state.title} />

        <select value={ this.state.category } onChange={ this.handleChange }>
          <option value="default" disabled={true}>Choose a category</option>
          { cats }
        </select>

        <input type="submit" value="Create Project" />

      </form>
    )
  }
}

export default ProjectForm;
