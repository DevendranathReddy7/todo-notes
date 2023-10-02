import { useSelector } from "react-redux"
import './ProgressBar.css'
const ProgressBar = () => {
    const todos = useSelector(str => str.todoReducer)
    const completedTodo = []
    todos.map(todo => {
        if (todo.completed === true) {
            completedTodo.push(todo.todo)
        }
    })
    return (
        <div className="progress-bar-container">
            <progress className='progress-bar' value={completedTodo.length} max={todos.length}></progress>
            <div className="div-count">
                <p className="count">{completedTodo.length}/{todos.length}</p>
            </div>
        </div>
    )
}
export default ProgressBar