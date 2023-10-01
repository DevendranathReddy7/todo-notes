import Navbar from "./Navbar"
import Input from "./Input"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, errorTodo } from "../actions/actions"
import PlaceHolder from "./PlaceHolder"

const ToDo = () => {
    const dispatch = useDispatch()
    const todos = useSelector(str => str.todoReducer)

    const [todo, setTodo] = useState('')
    const addToDoHandler = (e) => {
        setTodo(e.target.value)
    }
    const todoExisted = todos.some(eachTodo => eachTodo.todo === todo)
    const submitHandler = (e) => {
        e.preventDefault()
        if (todo === '') {
            dispatch(errorTodo('ToDo can\'t be empty!'))
        } else if (todoExisted) {
            dispatch(errorTodo(`ToDo called ${todo} is already existed..Please add a new one`))
        } else {
            dispatch(addTodo(todo))
        }

    }
    return (
        <div>
            <Navbar title={"ToDo"} />
            <Input placeholder={"Add ToDo"} onChange={addToDoHandler} onSubmit={submitHandler} />
            <PlaceHolder />
        </div>
    )
}
export default ToDo