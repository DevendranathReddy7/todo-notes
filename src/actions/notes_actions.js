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