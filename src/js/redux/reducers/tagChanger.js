const tagChanger = (state = {tag: 'date', isDate: true}, action) => {
    switch (action.type) {
        case 'CHANGE-TAG':
            return action.payload
        default:
            return state
    }
};

export {tagChanger}