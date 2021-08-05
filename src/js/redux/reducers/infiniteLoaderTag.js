const infiniteLoaderTag = (state = 'date', action) => {
    switch (action.type) {
        case 'CHANGE-TAG':
            return action.payload
        default:
            return state
    }
};

export {infiniteLoaderTag}