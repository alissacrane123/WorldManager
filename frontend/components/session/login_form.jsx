import React from 'react';
import { withRouter } from 'react-router-dom'

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

  demoLogin() {
    event.preventDefault();
    this.props.login({email: 'alissa@gmail.com', password: 'password'})
  }

  render() {

    return (
      <form id="session">
        <h3>Login Below</h3>
        
        <input value={this.state.email} onChange={this.handleChange('email')} placeholder="Email" />
        <input value={this.state.password} onChange={this.handleChange('password')} placeholder="Password" />

        <button onClick={this.handleSubmit}>Login</button>
        <button className="demo" onClick={() => this.demoLogin()}>Demo Login</button>
        <a onClick={() => this.props.history.push('/signup')}>Signup Instead</a>
      </form>
    )
  }
}

export default withRouter(LoginForm);