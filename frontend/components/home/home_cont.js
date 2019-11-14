import { connect } from 'react-redux';
import Home from './home';

// import { login, logout, signup } from '../../actions/session_actions';

const msp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],

});

const mdp = dispatch => ({

});


export default connect(msp, mdp)(Home);