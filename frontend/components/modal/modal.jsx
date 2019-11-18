import React from 'react';
import ProjectFormContainer from '../project/project_form_cont';
import TaskFormContainer from '../task/task_form_cont';

class Modal extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    let { modal, closeModal } =  this.props;

    if (!modal) return null;
    let component;
    switch (modal) {
      case 'newProject':
        component = <ProjectFormContainer />;
        break;
      case 'newTasks':
        component = <TaskFormContainer />
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