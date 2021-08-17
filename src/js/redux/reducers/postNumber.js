const postNumber = (state = 0, action) => {
    switch (action.type){
        case 'POSTS-NUMBER':
            return action.payload;
        default:
            return state;
    }

};

export {postNumber}