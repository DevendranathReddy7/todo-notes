let id = 0;
const intialState = []
const NotesReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'ADD_NOTES':
            // const errorPresent = Array.isArray(state) && state.some(note => note.id === 0)
            // if (errorPresent) {
            //     return state
            // } else {
            const withoutError = Array.isArray(state) && state.filter(note => note.id !== 0)
            return [
                ...withoutError, {
                    id: ++id,
                    notes: action.payload.title,
                    ReadMore: true, error: false,
                    date: new Date().toLocaleDateString()
                }
            ]
        //}
        case 'DELETE_NOTES':
            return state.filter(note => note.id !== action.payload.id)
        case 'TOGGLE_READ_MORE':
            return state.map(note => note.id === action.payload.id ? { ...note, ReadMore: !note.ReadMore } : note)
        case 'ERROR_NOTES':
            const errorPresnet = Array.isArray(state) && state.some(note => note.id === 0)
            if (errorPresnet) {
                return state
            } else {
                return [{
                    id: 0,
                    notes: action.payload.title,
                    ReadMore: true, error: true
                }, ...state]
            }
        case "CANCEL_ERROR":
            return state.filter(note => note.id !== 0)
        default:
            return state
    }
}
export default NotesReducer