import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import ProjectShowContainer from './project/project_show_cont';
import HomeContainer from './home/home_cont';
import SplashContainer from './session/splash_cont';
import NavbarContainer from './navbar/navbar_container';
import ModalContainer from './modal/modal_container';

const App = () => (
  <div className="app-container">
    <ModalContainer />

    <Switch>
      <AuthRoute path="/signup" component={SplashContainer} />
      <AuthRoute path="/login" component={SplashContainer} />
      <Route path="/" component={NavbarContainer} />
    </Switch>

    <div id="content" className="content">
      <Switch>
        <ProtectedRoute path="/projects/:projectId" component={ProjectShowContainer} />
        <ProtectedRoute path="/" component={HomeContainer} />
      </Switch>
    </div>

  </div>
);

export default App;