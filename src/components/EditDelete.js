import { useState } from "react"
import { StyledContainer, StyledEditDelete } from "./styles/ButtonStyles"
import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, editTodo } from "../actions/actions"
import EditModal from "./EditModal"

const EditDelete = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const [selectedItem, setSelecteItem] = useState()
    const dispatch = useDispatch()
    const todos = useSelector(st => st.todoReducer)
    const deleteHandle = (id) => {
        todos.filter(todo => todo.id === id ? dispatch(deleteTodo(todo.id)) : '')
    }
    const editHandler = (id) => {
        setIsEditing((prev) => !prev)
        todos.filter(todo => todo.id === id ? setSelecteItem(todo) : '')
    }
    return (
        <>
            <div style={{ borderStyle: "solid", borderRadius: '7px' }} >
                <StyledEditDelete onClick={() => editHandler(props.id)}>Edit</StyledEditDelete>
                <StyledEditDelete onClick={() => deleteHandle(props.id)}>Delete</StyledEditDelete>
            </div >
            {isEditing && <EditModal clickedItem={selectedItem} />}

        </>
    )
}
export default EditDelete