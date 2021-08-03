const listInit = {
    posts: [],
    error: ''
}

const postsList = (state = listInit, action) => {
    switch (action.type) {
        case "ERROR":
            return {posts: [], error: action.payload}
        case 'POSTS':
            return {posts: action.payload, error: ''}
        default:
            return state
    }
};

export {postsList}