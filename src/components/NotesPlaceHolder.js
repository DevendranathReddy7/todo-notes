import { useDispatch, useSelector } from "react-redux"
import { StyledContainer, StyledLi } from "./styles/ButtonStyles"
import './NotesPlaceHolder.css'
import { toggleReadMore, deleteNotes, cancelError } from "../actions/notes_actions"
import { useState } from "react"
import Error from "./Error"
const NotesPlaceHolder = () => {
    const [greaterthan100, setGreaterthan100] = useState({ show: true, id: 0 })
    const notes = useSelector(store => store.NotesReducer)
    const dispatch = useDispatch()

    const deleteHandle = (id) => {
        dispatch(deleteNotes(id))
    }
    const toggleReaMore = (id) => {
        dispatch(toggleReadMore(id))
    }
    const closeHandler = () => {
        dispatch(cancelError())
    }
    return (
        <div>
            {Array.isArray(notes) && notes.map(note => note.error === true ? <Error err={note.notes} onClose={closeHandler} /> :
                <StyledLi key={note.id}>
                    <StyledContainer>
                        <div>
                            <h3 className="notes">{note.ReadMore ? note.notes.slice(0, 100) : note.notes}</h3>
                            <h4 onClick={() => toggleReaMore(note.id)} className="read-hide">{note.notes.length > 100 ? note.ReadMore ? " ...Read More" : " ...Read Less" : ''}</h4>
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