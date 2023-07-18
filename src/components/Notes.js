import { useState } from "react"
import Button from "./Button"
import './Notes.css'

const Notes = (props) => {
    const [notes, setNotes] = useState('')
    const [showInput, setShowInput] = useState()
    const [showContent, setShowContent] = useState()
    const notesHandler = (e) => {
        setNotes(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        props.onNote(notes)
    }
    const showInputHandler = (isExpand) => {
        setShowInput(isExpand)
    }
    const showContentHandler = (show) => {
        setShowContent(show)
        props.onSelect(showContent)
    }
    return (
        <>
            <Button onClick={showInputHandler} title={"Notes"} onSelect={showContentHandler} contentShow={props.contentShow} />
            {showInput && <form onSubmit={submitHandler}>
                <input type="text" className="notes_input" placeholder='Add Notes' onChange={notesHandler} />
                <button>Add</button>
            </form>}

        </>
    )
}

export default Notes