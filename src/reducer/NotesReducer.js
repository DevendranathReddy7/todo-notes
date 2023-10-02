let id = 0;
const intialState = []
const NotesReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'ADD_NOTES':
            return [
                ...state, {
                    id: ++id,
                    notes: action.payload.title,
                    ReadMore: true
                }
            ]

        case 'DELETE_NOTES':
            return state.filter(note => note.id !== action.payload.id)
        case 'TOGGLE_READ_MORE':
            return state.map(note => note.id === action.payload.id ? { ...note, ReadMore: !note.ReadMore } : note)
        default:
            return state
    }
}
export default NotesReducer