/// import actions

const initialState = {
    todos: [
        {
            value: 'Walk the dog',
            completed: false
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                //add payload to state in the above manner
            }
        case TOGGLE_TODO:
            return {
                ...state,
                //add payload to state in the above manner
            }
    }
}

export default reducer