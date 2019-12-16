export const createPost = post => {
  // debugger
  return $.ajax({
    method: 'POST',
    url: 'api/posts',
    data: { post }
  })
}

export const fetchPosts = (params) => {

  return $.ajax({
    method: 'GET',
    url: 'api/posts',
    data: params
  })
}