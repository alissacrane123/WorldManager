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

          <div>
            <input onChange={this.handleChange('fname')} value={this.state.fname}/>
            <input onChange={this.handleChange('lname')} value={this.state.lname}/>
          </div>

          <input onChange={this.handleChange('email')} value={this.state.email} />
          <input onChange={this.handleChange('password')} value={this.state.password}/>

          <button onClick={this.handleSubmit}>Sign Up</button>
          <button onClick={() => this.props.history.push('/login')}>Login Instead</button>

      </form>
    )
  }
}

export default withRouter(SignupForm);