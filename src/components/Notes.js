import { useState } from "react"
import Input from "./Input"
import Navbar from "./Navbar"

const Notes = () => {
    const [notes, setNotes] = useState([{ notes: '', id: '' }])
    const addNotesHandle = (e) => {

    }

    const submitHandler = (e) => {
        e.preventDefault()

    }
    return (
        <div>
            <Navbar title={"Notes"} />
            <Input placeholder={"Add Notes"} changeHandler={addNotesHandle} onSubmitHandler={submitHandler} />
        </div>
    )
}
export default Notes