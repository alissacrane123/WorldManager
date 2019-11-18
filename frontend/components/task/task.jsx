// import React from 'react';
// import TaskIndexItem from './task_index_item';

// class TaskIndex extends React.Component {
//   constructor(props) {
//     super(props);
//     let { notStarted, inProgress, finished } = this.props;
//     let tasks = notStarted.concat(inProgress).concat(finished);
//     this.state = { tasks: tasks };
//   }

//   // renderTasks(i) {
//   //   let { notStarted, inProgress, finished } = this.props;
//   //   let tasks = [notStarted, inProgress, finished];
//   //   let taskStatus = ["Not Started", "In Progress", "Finished"];

//   //   tasks = tasks[i].map(task => (
//   //     <li key={task.id} onDragStart={(e) => this.onDragStart(e, task.id)} className="draggable" draggable>
//   //       <TaskIndexItem task={task} />
//   //     </li>
//   //   ))

//   //   let status = taskStatus[i];

//   //   return (
//   //     <section className="droppable"
//   //       onDragOver={(e) => this.onDragOver(e)}
//   //       onDrop={(e) => this.onDrop(e, status)}>
//   //       <h3>{status}</h3>
//   //       <ul
//   //       // className="droppable" 
//   //       // onDragOver={(e) => this.onDragOver(e)}
//   //       // onDrop={(e) => this.onDrop(e, status)}
//   //       >
//   //         {tasks}
//   //       </ul>
//   //     </section>
//   //   )
//   // }

//   onDrop(e, status) {
//     // debugger
//     let id = e.dataTransfer.getData("id");
//     let tasks = this.state.tasks.map(task => {
//       if (task.id === Number(id)) {
//         // task.status = status;
//         task = Object.assign(task, { status: status });
//         debugger
//         this.props.updateTask(task)
//       }

//       return task;
//     });

//     debugger

//     this.setState({ ...this.state, tasks })
//   }

//   onDragOver(e) {
//     e.preventDefault();
//   }

//   onDragStart(e, id) {
//     console.log('dragstart', id);
//     e.dataTransfer.setData("id", id);
//   }


//   render() {
//     let tasks = {
//       "Not Started": [],
//       "In Progress": [],
//       "Finished": []
//     }


//     this.state.tasks.forEach((task) => {
//       tasks[task.status].push(
//         <div key={task.id}
//           onDragStart={(e) => this.onDragStart(e, task.id)}
//           draggable
//           className="draggable"

//         >
//           {task.id}
//         </div>
//       );
//     });

//     return (
//       <div id="task-index" className="container-drag">
//         {/* <h2>Current Tasks</h2> */}

//         <div className="not-started droppable"
//           onDragOver={(e) => this.onDragOver(e)}
//           onDrop={(e) => { this.onDrop(e, "notStarted") }}>
//           <span className="task-header">NOT STARTED</span>
//           {tasks["Not Started"]}
//         </div>
//         <div className="in-progress droppable"
//           onDragOver={(e) => this.onDragOver(e)}
//           onDrop={(e) => this.onDrop(e, "inProgress")}>
//           <span className="task-header">IN PROGRESS</span>
//           {tasks["In Progress"]}
//         </div>
//         <div className="finished droppable"
//           onDragOver={(e) => this.onDragOver(e)}
//           onDrop={(e) => this.onDrop(e, "finished")}>
//           <span className="task-header">FINISHED</span>
//           {tasks["Finished"]}
//         </div>


//       </div>
//     )
//   }
// }


// export default TaskIndex;
