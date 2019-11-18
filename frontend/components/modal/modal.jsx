import React from 'react';
import ProjectFormContainer from '../project/project_form_cont';

class Modal extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    let { modal, closeModal } =  this.props;

    if (!modal) return null;

    let component;
    switch (modal) {
      // case 'dragError':
      //   component = <div><h3>You can only move tasks that belong to you!</h3></div>;
      //   break;
      case 'newProject':
        component = <ProjectFormContainer />;
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