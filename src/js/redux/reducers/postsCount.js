const postsCount = (state = 0, action) => {
    switch (action.type){
        case 'COUNT-POSTS':
            return action.payload;
        case 'COUNT-ADD':
            return state +1;
        default:
            return state;
    }

};

export {postsCount}