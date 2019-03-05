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
    console.log('inside reducer:', action)
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                id: Date.now(),
                value: action.payload,
                completed: false
            }
            return {
                ...state,
                todos : [...state.todos, newTodo]

            }
        }
        return state
    }
 
