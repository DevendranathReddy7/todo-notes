import { useDispatch, useSelector } from "react-redux"
import { StyledContainer, StyledLi } from "./styles/ButtonStyles"
import './NotesPlaceHolder.css'
import { deleteNotes } from "../actions/notes_actions"
import { useState } from "react"
const NotesPlaceHolder = () => {
    const [greaterthan100, setGreaterthan100] = useState({ show: true, id: '' })
    const notes = useSelector(store => store.NotesReducer)
    const dispatch = useDispatch()

    const deleteHandle = (id) => {
        dispatch(deleteNotes(id))
    }

    console.log(notes)
    console.log(greaterthan100)
    return (
        <div>
            {Array.isArray(notes) && notes.map(note => <StyledLi key={note.id}>
                <StyledContainer>
                    <div>
                        <h3 className="notes">{greaterthan100.show ? note.notes.slice(0, 100) : note.notes}</h3>
                        <h4 onClick={() => setGreaterthan100({ show: !greaterthan100.show, id: note.id })} className="read-hide">{note.notes.length > 100 ? greaterthan100.show ? "...Read More" : "...Read Less" : ''}</h4>
                    </div>
                    <div>
                        <button className="btn close_btn" onClick={() => deleteHandle(note.id)}>X</button>
                    </div>
                </StyledContainer>
            </StyledLi>)}
        </div>
    )
}
export default NotesPlaceHolder