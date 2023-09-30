let id = 0
const intialState = []
const todoReducer = (state = intialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {
                id: ++id,
                todo: action.payload.title,
                completed: false,
                isEditing: false

            }]
        case 'UPDATE_TODO':
            return state.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo)
        default:
            return state

    }

}

export default todoReducer