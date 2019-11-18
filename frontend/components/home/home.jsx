import React from 'react';
import { connect } from 'react-redux';

import ProjectIndexCont from '../project/project_index_cont';

class Home extends React.Component {

  render() {
    let { currentUser } = this.props;
  
    return(
      <div id="home">
        <h1>Welcome, { currentUser.fname }</h1>

        <section>
          <h2>Your recent projects: </h2>

          <ProjectIndexCont />

        </section>
   

      </div>
    )
  }
}

export default Home;
