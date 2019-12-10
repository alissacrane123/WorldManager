import React from 'react';

class TaskFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.defaultFilter
  }

  componentDidMount() {
    let filter = Object.assign({}, this.state);
    this.props.fetchTasks(filter)
  }

  render() {
    let { currentUser } = this.props;

    let teammates = currentUser.teammates.map((mate, i) => (
      <option key={i} value={mate.id}>{mate.name}</option>
    ))



    return (
      <div id="task-filter" className="filter">
        <div>
          <label>Owner</label>
          <select>
            <option value={null}>Any</option>
            { teammates }
          </select>
        </div>

        <div>
          <label>Project</label>
        </div>

      </div>  
    )
  }
}

export default TaskFilter;