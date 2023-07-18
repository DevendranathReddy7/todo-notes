
import { useState } from "react"
import Button from "./Button"
import './ToDo.css'

const ToDo = (props) => {
    const [showInput, setShowInput] = useState()
    const [todo, setTodo] = useState('')
    // const [showContent, setShowContent] = useState()

    const submitHandler = e => {
        e.preventDefault()
        props.onTodo(todo)
    }

    const toDoHandler = (e) => {
        setTodo(() => e.target.value)
    }

    const showInputHandler = (isExpand) => {
        setShowInput(isExpand)
    }

    // const showContentHandler = (show) => {
    //     setShowContent(show)
    //     props.onSelect(showContent)
    // }

    return (
        <>
            <Button onClick={showInputHandler} title={"ToDo"} />
            {showInput && <form onSubmit={submitHandler}>
                <input type="text" className='input_todo' placeholder="Add ToDo" onChange={toDoHandler} />
                <button >Add</button>
            </form>}

        </>
    )
}

export default ToDo