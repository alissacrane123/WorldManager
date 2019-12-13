import { RECEIVE_POST, RECEIVE_POSTS } from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_POST:
      return Object.assign(nextState, action.post);
    case RECEIVE_POSTS:
      return action.posts
    default:
      return state;
  }
}

export default postsReducer;