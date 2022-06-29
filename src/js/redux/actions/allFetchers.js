
const fetchLoading = data => ({type: 'LOADING', payload: data})

const fetchPosts = data => ({type: 'POSTS', payload: data});

const fetchPostsNumber = data => ({type: 'POSTS-NUMBER', payload: data});

const fetchError = data => ({type: 'ERROR', payload: data})

const fetchLastPost = data => ({type: 'LAST-POSTS', payload: data})

const fetchTagLoader = (data, isDate) => ({type: 'CHANGE-TAG', payload: {tag: data, isDate}})

const fetchTagArr = data => ({type: 'TAG-POSTS', payload: data})

const fetchTagArrLength = data => ({type: 'LAST-TAG-POSTS', payload: data})

const fetchLog = data => ({type: 'LOG-ACTION', payload:data})

const fetchDemo = data => ({type: 'DEMO', payload:data})

export {
    fetchLoading,
    fetchPosts,
    fetchPostsNumber,
    fetchError,
    fetchLastPost,
    fetchTagLoader,
    fetchTagArr,
    fetchTagArrLength,
    fetchLog,
    fetchDemo}