import { useState } from 'react'
import './EditModal.css'
import { useDispatch, useSelector } from 'react-redux'
import { editTodo } from '../actions/actions'
const EditModal = (props) => {
    const [isOpen, setIsOpen] = useState(true)
    const [newTodo, setNewTodo] = useState()
    const todos = useSelector(store => store.todoReducer)
    const dispatch = useDispatch()
    const toggleModal = () => {
        setIsOpen((prev) => !prev)
    }
    const changeHandler = (e) => {
        setNewTodo(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        todos.filter(todo => todo.id === props.clickedItem.id ? dispatch(editTodo(newTodo, todo.id)) : '')
        setIsOpen((prev) => !prev)
    }
    if (isOpen) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <>
            {isOpen && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <form onSubmit={submitHandler}>
                            <h1 className="cross" onClick={toggleModal}>&times;</h1>
                            <textarea className="todo_text" placeholder={props.clickedItem.todo} onChange={changeHandler} />
                            <button className="todo_update">Update</button>
                        </form>
                    </div>
                </div>
            )}

        </>

    )
}
export default EditModal