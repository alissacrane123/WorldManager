import React from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import ProjectShowContainer from './project/project_show_cont';
import HomeContainer from './home/home_cont';
import SplashContainer from './session/splash_cont';
import NavbarContainer from './navbar/navbar_container';
import ModalContainer from './modal/modal_container';
import TaskShowContainer from './task/task_show_cont';
import TeamContainer from './team/team_cont';
import CalendarContainer from './calendar/calendar_cont';
import NotifyContainer from './notifications/notify_cont';

const App = (props) => {

  let { pathname } = props.history.location;

  let cn = (pathname === '/signup' || pathname === '/login') ? '' : 'content';

  return (
    <div className="app-container">
      <ModalContainer />

      <Switch>
        <AuthRoute path="/signup" component={SplashContainer} />
        <AuthRoute path="/login" component={SplashContainer} />
        <Route path="/" component={NavbarContainer} />
      </Switch>

      <div id="content" className={cn}>
        <Switch>
          <ProtectedRoute path="/projects/:projectId" component={ProjectShowContainer} />
          <ProtectedRoute path="/tasks" component={TaskShowContainer} />
          <ProtectedRoute path="/cal" component={CalendarContainer} />
          <ProtectedRoute path="/team" component={TeamContainer} />
          <ProtectedRoute path="/notify" component={NotifyContainer} />
          <ProtectedRoute path="/" component={HomeContainer} />
        </Switch>
      </div>

    </div>
  )
};

export default withRouter(App);