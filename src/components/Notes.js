import { useState } from "react"
import Input from "./Input"
import Navbar from "./Navbar"
import NotesPlaceHolder from "./NotesPlaceHolder"
import { useDispatch } from "react-redux"
import { addNotes } from "../actions/notes_actions"

const Notes = () => {
    const [notes, setNotes] = useState('')
    const dispatch = useDispatch()
    const addNotesHandle = (e) => {
        setNotes(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addNotes(notes))

    }
    return (
        <div>
            <Navbar title={"Notes"} />
            <Input placeholder={"Add Notes"} onChange={addNotesHandle} onSubmit={submitHandler} />
            <NotesPlaceHolder />
        </div>
    )
}
export default Notes