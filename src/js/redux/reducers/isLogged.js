const isLogged = (state = false, action) => {
    switch (action.type) {
        case 'LOGGED':
            return true
        default:
            return false
    }
};

export {isLogged}