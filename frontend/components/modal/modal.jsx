import React from 'react';
import ProjectFormContainer from '../project/project_form_cont';
import TaskFormContainer from '../task/task_form_cont';
import TaskModalItem from './task_modal_item';
import ProjectMembersForm from '../project/project_members_form';
import PostFormContainer from '../feed/post_form_cont';

class Modal extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    let { modal, closeModal, errors,users, pms, currentUserId, tasks, updateTask, openModal, projectId, createPM } =  this.props;

    if (!modal) return null;
    let taskId;
    if (modal.slice(0, 4) === 'task') {
      taskId = Number(modal.slice(4))
      modal = 'task';
    }

    
    let component;
    switch (modal) {
      case 'newPM':
        component = <ProjectMembersForm errors={errors} projectId={projectId} pms={pms} openModal={openModal} createPM={createPM} users={users} currentUserId={currentUserId}/>;
        break;
      case 'newProject':
        component = <ProjectFormContainer />;
        break;
      case 'newProjectTasks':
        component = <TaskFormContainer projectTask={true}/>
        break;
      case 'newTasks':
        component = <TaskFormContainer />
        break;
      case 'task':
        component = <TaskModalItem tasks={tasks} taskId={taskId} updateTask={updateTask} closeModal={closeModal}/>
        break;
      case 'newPost':
        component = <PostFormContainer />
        break;
      default:
        return null;
    }


    return (
      <div className="modal-background" onClick={ () => closeModal() }>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>

      </div>
    )
  }

}

export default Modal;