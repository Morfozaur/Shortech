const filterType = (state = 'data', action) => {
    switch (action.type) {
        case 'FILTER':
            return action.payload;
        default:
            return state;
    }
}

export {filterType}