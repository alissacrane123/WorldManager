import * as PostAPI from '../util/post_api_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const createPost = (post) => dispatch => (
  PostAPI.createPost(post).then(post => dispatch(receivePost(post)))
)