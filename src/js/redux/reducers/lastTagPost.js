const lastTagPost = (state = '', action) => {
    switch (action.type){
        case 'LAST-TAG-POSTS':
            return action.payload;
        default:
            return state;
    }

};

export {lastTagPost}