export const addNotes = (content) => {
    return {

        type: "ADD_NOTES", payload: { title: content }
    }
}

export const deleteNotes = (id) => {
    return {
        type: 'DELETE_NOTES', payload: { id: id }
    }
}

export const toggleReadMore = (id) => {
    return {
        type: "TOGGLE_READ_MORE", payload: { id: id }
    }
}
export const errorNotes = () => {
    return {
        type: "ERROR_NOTES", payload: { title: 'Notes can\'t be empty!' }
    }
}

export const cancelError = () => {
    return {
        type: "CANCEL_ERROR"
    }
}