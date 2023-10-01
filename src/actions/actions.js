export const addTodo = (title) => {
    return {
        type: "ADD_TODO", payload: { title: title }
    }
}

export const updateTodo = (id) => {
    return {
        type: "UPDATE_TODO", payload: { id: id }
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO", payload: { id: id }
    }
}

export const editTodo = (newTodo, id) => {

    return {
        type: "EDIT_TODO", payload: { title: newTodo, id: id }
    }
}

export const errorTodo = (todo) => {
    return {
        type: "ERROR_TODO", payload: { title: todo, error: true }
    }
}

export const cancelError = () => {

    return {
        type: "CANCEL_ERROR", payload: { error: false }
    }
}