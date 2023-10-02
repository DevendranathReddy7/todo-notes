import { useState } from "react"
import { StyledContainer, StyledEditDelete } from "./styles/ButtonStyles"
import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, editTodo } from "../actions/actions"
import EditModal from "./EditModal"
import deleteImg from '../assests/icons8-delete.png'
import edit from '../assests/icons8-edit.png'
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
    const updateHandler = () => {
        props.onUpdate(props.id)
    }
    return (
        <>
            <div style={{ borderStyle: "solid", borderRadius: '7px' }} >
                <StyledEditDelete onClick={() => editHandler(props.id)}><img src={edit} alt='icon' /></StyledEditDelete>
                <StyledEditDelete onClick={() => deleteHandle(props.id)}><img src={deleteImg} alt='icon' /></StyledEditDelete>
            </div >
            {isEditing && <EditModal clickedItem={selectedItem} onUpdate={updateHandler} />}

        </>
    )
}
export default EditDelete