import { useDispatch, useSelector } from "react-redux"
import { StyledContainer, StyledLi } from "./styles/ButtonStyles"
import { StyledToDoStatus } from "./styles/ButtonStyles"
import kebab from '../assests/kebab.png'
import { cancelError, kenbanHandle, updateTodo } from "../actions/actions"
import './PlaceHolder.css'
import EditDelete from "./EditDelete"
import Error from "./Error"
import ProgressBar from "./ProgressBar"
const PlaceHolder = () => {
    const todos = useSelector(store => store.todoReducer)
    const dispatch = useDispatch()
    const changeHandler = (id) => {
        dispatch(updateTodo(id))
    }

    const kenbanHandler = (id) => {
        dispatch(kenbanHandle(id))
    }
    const closeHandler = () => {
        dispatch(cancelError())
    }
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
                            <img src={kebab} alt="keba" onClick={() => kenbanHandler(todo.id)}></img>
                            {/* {kebabClicked.clicked && kebabClicked.id === todo.id ? <EditDelete id={todo.id} onUpdate={() => setKebabClicked({ ...kebabClicked, clicked: false })} /> : ''} */}
                            {todo.kenbanOpen && <EditDelete id={todo.id} onUpdate={kenbanHandler} />}

                        </div>
                    </StyledContainer>
                </StyledLi>)}

        </>
    )
}
export default PlaceHolder