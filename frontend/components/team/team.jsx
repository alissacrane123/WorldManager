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
      let projectUsers = users.filter(user => project.memberIds.includes(user.id))
      projectUsers = projectUsers.map((user,i) => (
        <li className="list-item">{user.fullName}</li>
      ))
      return (
        <section key={i} className="list">
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