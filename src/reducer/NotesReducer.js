let id = 0;
const intialState = []
const NotesReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'ADD_NOTES':
            return [
                ...state, {
                    id: ++id,
                    notes: action.payload.title
                }
            ]

        case 'DELETE_NOTES':
            return state.filter(note => note.id !== action.payload.id)
        default:
            return state
    }
}
export default NotesReducer