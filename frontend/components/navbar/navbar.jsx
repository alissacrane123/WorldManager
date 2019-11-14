import React from 'react';
import SVG from '../svg';

const Navbar = (props) => {

  let { logout } = props;

  function toggleSidebar() {
    let labels = document.querySelectorAll('#navbar label').forEach(label => {
      label.classList.toggle('close');
    });

    document.getElementById('navbar').classList.toggle('expanded');
    document.getElementById('content').classList.toggle('expanded');
    document.getElementById('sb-arrow').classList.toggle('close');
    document.getElementById('sb-menu').classList.toggle('close');
  }

  return(
    <nav id="navbar" className="navbar">

      <div onClick={toggleSidebar}>
        <SVG id="sb-menu" className="sb" h={24} w={24} transform="scale(0.63)" name="menue" fill="white" />
        <SVG id="sb-arrow" className="sb2 close" name="big-arrow" h={24} w={24} fill="white" transform="translate(32 25) scale(1.3) rotate(180)" id="sb-arrow" />
      </div>

      <div>
        <SVG className="sb" h={24} w={24} name="home" fill="white"/>
        <label className="close">Home</label>
      </div>

      <div>
        <SVG className="sb" h={24} w={24} name="task" fill="white" />
        <label className="close">Tasks</label>
      </div>
      

      <button onClick={() => logout()}>Logout</button>
    </nav>
  )

}

export default Navbar;