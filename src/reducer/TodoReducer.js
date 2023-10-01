let id = 0
const intialState = []
const todoReducer = (state = intialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {
                id: ++id,
                todo: action.payload.title,
                completed: false,
                error: false

            }]
        case 'UPDATE_TODO':
            return state.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo)
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload.id)
        case "EDIT_TODO":
            return state.map(todo => todo.id === action.payload.id ? { ...todo, todo: action.payload.title } : todo)
        case "ERROR_TODO":
            return [{
                id: 0,
                todo: action.payload.title,
                completed: false,
                error: true
            }, ...state]
        case "CANCEL_ERROR":
            return state.filter(todo => todo.id !== 0)
        default:
            return state

    }

}

export default todoReducer