const fetchLoading = data => {
    return {type: 'LOADING', payload: data}
}

const fetchPosts = data => {
    return {type: 'POSTS', payload: data}
}

const fetchError = data => {
    return {type: 'ERROR', payload: data}
}

const fetchCounter = data => {
    return {type: 'COUNT-POSTS', payload: data}
}
export {fetchLoading, fetchPosts, fetchError, fetchCounter}