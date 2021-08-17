const fetchLoading = data => {
    return {type: 'LOADING', payload: data}
}

const fetchPosts = data => ({type: 'POSTS', payload: data});

const fetchError = data => {
    return {type: 'ERROR', payload: data}
}

const fetchLastPost = data => {
    return {type: 'LAST-POSTS', payload: data}
}

const fetchTagLoader = (data, isDate) => {
    return {type: 'CHANGE-TAG', payload: {tag: data, isDate}}
}

const fetchTagArr = data => {
    return {type: 'TAG-POSTS', payload: data}
}

const fetchTagArrLength = data => {
    return {type: 'LAST-TAG-POSTS', payload: data}
}

const fetchLog = data => {
    return {type: 'LOG-ACTION', payload:data}
}

const fetchDemo = data => {
    return {type: 'DEMO', payload:data}
}

export {
    fetchLoading,
    fetchPosts,
    fetchError,
    fetchLastPost,
    fetchTagLoader,
    fetchTagArr,
    fetchTagArrLength,
    fetchLog,
    fetchDemo}