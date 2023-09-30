import Navbar from "./Navbar"
import Input from "./Input"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../actions/actions"
import PlaceHolder from "./PlaceHolder"

const ToDo = () => {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState('')
    const addToDoHandler = (e) => {
        setTodo(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(todo))

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