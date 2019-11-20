import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginForm from './login_form';
import SignupForm from  './signup_form';

class Splash extends React.Component {

  render() {
    let { login, signup, errors } = this.props;
    
    let form;
    if (this.props.history.location.pathname === "/signup") {
      form = <SignupForm signup={signup} errors={errors} />
    } else {
      form = <LoginForm login={login} errors={errors} />
    }

    return (
      <div id="splash">
        <nav>
          <h1>World Manager</h1>
        </nav>
        
        {form}
      </div>
    )
  }
}

export default Splash;