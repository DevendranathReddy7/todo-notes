import { useDispatch, useSelector } from "react-redux"
import { StyledContainer, StyledLi } from "./styles/ButtonStyles"
import { StyledToDoStatus } from "./styles/ButtonStyles"
import kebab from '../assests/kebab.png'
import { updateTodo } from "../actions/actions"
import './PlaceHolder.css'
const PlaceHolder = () => {
    const todos = useSelector(store => store.todoReducer)
    const dispatch = useDispatch()
    const changeHandler = (id) => {
        dispatch(updateTodo(id))
    }
    return (
        <>
            {todos.map(todo => <StyledLi key={todo.id}>
                <StyledContainer>
                    <div className="todo-wrapper">
                        <input type="checkbox" className="checkbox" onChange={() => changeHandler(todo.id)} checked={todo.checked} />
                        <h4 className="todos">{todo.todo}</h4>

                    </div>
                    <div className="todo-wrapper2">
                        <StyledToDoStatus done={todo.completed}>{todo.completed === true ? "Done" : "ToDo"}</StyledToDoStatus>
                        <img src={kebab} alt="keba"></img>
                    </div>
                </StyledContainer>
            </StyledLi>)}
        </>
    )
}
export default PlaceHolder