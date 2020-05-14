import React from 'react';
import { titleize } from '../../helpers/helper';

class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    let { projects, users } = this.props
    projects = projects.map((project, i) => {
      let projectUsers = users.filter(user => project.memberIds.includes(user.id));
      // debugger
      projectUsers = projectUsers.map((user,i) => (
        // <li key={i} className="list-item">{user.fullName}</li>
        <li key={i} className="list-item">{`${user.fname} ${user.lname}`}</li>
      ))
      return (
        <section key={i} className="list team">
          <div>
            <h2>{titleize(project.title)}</h2> 
          </div>    
            <ul>
              { projectUsers }
            </ul>
        </section>
      )
    })

    return (
      <div id='team' className="show">
        <div>
          { projects }

        </div>
      </div>
    )
  }
}

export default Team