let id = 0
const intialState = []
const todoReducer = (state = intialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const errorPresent = Array.isArray(state) && state.some(todo => todo.id === 0)
            if (errorPresent) {
                return state
            } else {
                return [...state, {
                    id: ++id,
                    todo: action.payload.title,
                    completed: false,
                    error: false,
                    kenbanOpen: false

                }]
            }

        case 'UPDATE_TODO':
            return state.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo)
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload.id)
        case "EDIT_TODO":
            return state.map(todo => todo.id === action.payload.id ? { ...todo, todo: action.payload.title } : todo)
        case "KENBAN_HANDLE":
            return state.map(todo => todo.id === action.payload.id ? { ...todo, kenbanOpen: !todo.kenbanOpen } : { ...todo, kenbanOpen: false })
        case "ERROR_TODO":
            const errorPresnet = Array.isArray(state) && state.some(todo => todo.id === 0)
            if (errorPresnet) {
                return state
            } else {
                return [{
                    id: 0,
                    todo: action.payload.title,
                    completed: false,
                    error: true
                }, ...state]
            }


        case "CANCEL_ERROR":
            return state.filter(todo => todo.id !== 0)
        default:
            return state

    }

}

export default todoReducer