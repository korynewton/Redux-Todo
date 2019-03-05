import { ADD_TODO, TOGGLE_TODO } from '../actions'

const initialState = {
    todos: [
        {
            id: 1,
            value: 'Walk the dog',
            completed: false
        }
    ]
}

export default function reducer(state = initialState, action) {
    return state
    // switch (action.type) {
    //     case ADD_TODO:
    //         return {
    //             // ...state,
    //             //add payload to state in the above manner
    //         }
    //     case TOGGLE_TODO:
    //         return {
    //             // ...state,
    //             //add payload to state in the above manner
    //         }
    // }
}
