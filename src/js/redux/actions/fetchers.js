const fetchPosts = data => {
    return {type: 'POSTS', payload:data}
}

const fetchError = data => {
    return {type: 'ERROR', payload:data}
}

export {fetchPosts, fetchError}