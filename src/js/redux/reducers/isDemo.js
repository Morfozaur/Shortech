const isDemo = (state = false, action) => {
    switch (action.type) {
        case "DEMO":
            return action.payload
        default:
            return state
    }
};

export {isDemo}