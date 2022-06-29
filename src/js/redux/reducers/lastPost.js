const lastPost = (state = '', action) => {
    switch (action.type){
        case 'LAST-POSTS':
            return action.payload;
        default:
            return state;
    }
};

export {lastPost}