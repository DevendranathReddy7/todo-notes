import { useDispatch, useSelector } from "react-redux"
import { StyledContainer, StyledLi } from "./styles/ButtonStyles"
import { StyledToDoStatus } from "./styles/ButtonStyles"
import kebab from '../assests/kebab.png'
import { cancelError, updateTodo } from "../actions/actions"
import './PlaceHolder.css'
import { useState } from "react"
import EditDelete from "./EditDelete"
import Error from "./Error"
import ProgressBar from "./ProgressBar"
const PlaceHolder = () => {
    const todos = useSelector(store => store.todoReducer)
    const [kebabClicked, setKebabClicked] = useState({ clicked: false, id: 0 })
    const dispatch = useDispatch()
    const changeHandler = (id) => {
        dispatch(updateTodo(id))
    }

    const closeHandler = () => {
        dispatch(cancelError())
    }
    console.log(todos)
    return (
        <>
            {Array.isArray(todos) && todos.length > 0 ? <ProgressBar /> : ''}
            {Array.isArray(todos) && todos.map(todo => todo.error === true ? <Error err={todo.todo} onClose={closeHandler} /> :
                <StyledLi key={todo.id}>
                    <StyledContainer>
                        <div className="todo-wrapper">
                            <input type="checkbox" className="checkbox" onChange={() => changeHandler(todo.id)} checked={todo.checked} />
                            <h4 className="todos">{todo.todo}</h4>

                        </div>
                        <div className="todo-wrapper2">
                            <StyledToDoStatus done={todo.completed}>{todo.completed === true ? "Done" : "ToDo"}</StyledToDoStatus>
                            <img src={kebab} alt="keba" onClick={() => setKebabClicked({ clicked: !kebabClicked.clicked, id: todo.id })}></img>
                            {kebabClicked.clicked && kebabClicked.id === todo.id ? <EditDelete id={todo.id} /> : ''}
                        </div>
                    </StyledContainer>
                </StyledLi>)}

        </>
    )
}
export default PlaceHolder