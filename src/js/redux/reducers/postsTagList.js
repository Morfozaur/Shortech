const postsTagList = (state = [], action) => {
    switch (action.type){
        case 'TAG-POSTS':
            return action.payload;
        default:
            return state;
    }
};

export {postsTagList}