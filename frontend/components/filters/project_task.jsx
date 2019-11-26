import React from 'react';

class ProjectTaskFilter extends React.Component {
  constructor(props) {
    super(props);

    let { userFilter } = this.props;

    userFilter = userFilter ? `tb${userFilter}` : 'tb00';

    this.state = { taskFilter: userFilter }
  }

  renderFilterButtons() {
    let { users, currentUserId, userFilter } = this.props;
    
    users = users.map(user => {
      if (user.id === currentUserId && user.id === userFilter) {
        return <button onClick={() => this.updateFilter(user.id)} id={`tb${user.id}`} className="tb selected">Your Tasks</button>
      } else if (user.id === currentUserId) {
        return <button onClick={() => this.updateFilter(user.id)} id={`tb${user.id}`} className="tb ">Your Tasks</button>
      } else if (user.id === userFilter) {
        return <button onClick={() => this.updateFilter(user.id)} id={`tb${user.id}`} className="tb selected">{user.fname}'s Tasks</button>
      } else {
        return <button onClick={() => this.updateFilter(user.id)} id={`tb${user.id}`} className="tb">{user.fname}'s Tasks</button>
      }
    })

    return users;
  }

  updateFilter(userId) {
    let current = document.getElementById(this.state.taskFilter);
    let newId = userId ? `tb${userId}` : 'tb00'
    let selectedButton = document.getElementById(newId);
    
    this.setState({ taskFilter: newId})
    current.classList.toggle('selected');
    selectedButton.classList.toggle('selected');
    this.props.updateFilter('tasks', {user: userId})

  }

  render() {
    let { updateFilter, userFilter } = this.props;

    let defaultClass = userFilter ? "tb" : "tb selected"
    
    return (
       <div className="project-task-filter">
          <button onClick={() => this.updateFilter(null)} id="tb00" className={defaultClass} key="all">All Tasks</button>
          { this.renderFilterButtons() }
       </div>
    );
  }
}

export default ProjectTaskFilter;