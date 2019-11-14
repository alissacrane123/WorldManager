import React from 'react';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/splash_cont';

class Modal extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    let { modal, closeModal } =  this.props;
    if (!modal) return null;

    modal = modal === 'login' ? <LoginContainer /> : <SignupContainer />

    return (
      <div className="modal-background" onClick={ () => closeModal() }>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { modal }
        </div>

      </div>
    )
  }

}

export default Modal;