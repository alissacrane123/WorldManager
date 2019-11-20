import React from 'react';
import { withRouter } from 'react-router-dom'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', fname: '', lname: '', city: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e)  {
    e.preventDefault();
    this.props.signup(this.state)
  }

  render() {

    return (
      <form id="session">
          <h3>Signup Below</h3>

          <div>
            <input onChange={this.handleChange('fname')} placeholder="First name" value={this.state.fname}/>
            <input onChange={this.handleChange('lname')} placeholder="Last name" value={this.state.lname}/>
          </div>

          <input onChange={this.handleChange('email')} placeholder="email" value={this.state.email} />
          <input onChange={this.handleChange('password')} placeholder="password" value={this.state.password}/>

          <button onClick={this.handleSubmit}>Sign Up</button>
          <a onClick={() => this.props.history.push('/login')}>Login Instead</a>

      </form>
    )
  }
}

export default withRouter(SignupForm);