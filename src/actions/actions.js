export const addTodo = (title) => {
    return {
        type: "ADD_TODO", payload: { title: title, err: false }
    }
}

export const updateTodo = (id) => {
    return {
        type: "UPDATE_TODO", payload: { id: id, err: false }
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO", payload: { id: id, err: false }
    }
}

export const editTodo = (id) => {
    return {
        type: "EDIT_TODO", payload: { id: id, err: false }
    }
}