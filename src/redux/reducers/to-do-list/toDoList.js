const initialState = [];

const toDoList = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_TO_DO_LIST':
            return payload

        default:
            return state
    }
}

export default toDoList