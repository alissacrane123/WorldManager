import React from 'react';
import { connect } from 'react-redux';
import { dateInOneWeek } from '../../helpers/helper';

import ProjectIndexCont from '../project/project_index_cont';
import TaskShowItem from '../task/task_show_item';
import PmIndexContainer from '../notifications/pm_index_cont';
import TaskSection from '../task/task_section';

import SVG from '../svg'

class Home extends React.Component {

  componentDidMount() {
    let date = dateInOneWeek();
    this.props.fetchTasks('week', date);
    this.props.fetchPMs()
  }

  render() {
    let { currentUser, tasks, pms, ownedTasks, updateTask, openModal,fetchPMs, upcomingTasks } = this.props;
  
    // ownedTasks = ownedTasks.map((task, i) => (
    //   <TaskShowItem task={task} key={i} updateTask={updateTask} openModal={openModal} />
    // ))
    return(
      <div id="home">
        
        <h1>Welcome, { currentUser.fname }</h1>
        
        { pms.length > 0 ? <PmIndexContainer /> : null }

        <section className="list">
          <div>
            <SVG name="carrot" h={12} w={12} rotate="rotate(90)" fill="gray" transform="scale(0.5)" />
            <h2>Recent Projects</h2>
          </div>

          <ProjectIndexCont />

        </section>

        {/* <section className="list">
          <div>
            <SVG name="carrot" h={12} w={12} rotate="rotate(90)" fill="gray" transform="scale(0.5)"/>
            <h2>Upcoming Tasks</h2>
          </div>
          <ul>
            {  ownedTasks }
          </ul>
        </section> */}
   
        <TaskSection tasks={upcomingTasks} filter="Upcoming"/>
      </div>
    )
  }
}

export default Home;
