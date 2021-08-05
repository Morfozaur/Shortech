const fetchLoading = data => {
    return {type: 'LOADING', payload: data}
}

const fetchPosts = data => {
    return {type: 'POSTS', payload: data}
}

const fetchError = data => {
    return {type: 'ERROR', payload: data}
}

const fetchLastPost = data => {
    return {type: 'LAST-POSTS', payload: data}
}

const fetchTagLoader = data => {
    return {type: 'CHANGE-TAG', payload: data}
}

const logIn = () => {
    return {type: 'LOGGED'}
}

export {
    fetchLoading,
    fetchPosts,
    fetchError,
    fetchLastPost,
    fetchTagLoader,
    logIn}