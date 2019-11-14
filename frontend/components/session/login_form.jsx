import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
  }

  handleChange(field) {
    return (e) => { this.setState({ [field]: e.target.value }) }
  }

  render() {
    // debugger
    return (
      <form id="session">
        <input value={this.state.email} onChange={this.handleChange('email')} />
        <input value={this.state.password} onChange={this.handleChange('password')} />

        <button onClick={this.handleSubmit}>Login</button>
      </form>
    )
  }
}

export default LoginForm;