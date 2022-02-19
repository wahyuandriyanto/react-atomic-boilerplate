const initialState = "Example"

const example = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'EXAMPLE_ACTION':
            return payload
    
        default:
            return state
    }
}

export default example