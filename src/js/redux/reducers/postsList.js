const listInit = {
    loading: false,
    posts: [],
    error: ''
}

const postsList = (state = listInit, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
        }
        case "ERROR":
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.payload
            }
        case 'POSTS':
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: ''
            }
        default:
            return state
    }
};

export {postsList}