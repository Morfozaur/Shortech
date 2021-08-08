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

const fetchTagArr = data => {
    return {type: 'TAG-POSTS', payload: data}
}

const fetchTagArrLength = data => {
    return {type: 'LAST-TAG-POSTS', payload: data}
}

const fetchFilterType = data => {
    return {type: 'FILTER', payload:data}
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
    fetchFilterType,
    fetchLog,
    fetchDemo}