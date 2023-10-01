import { useState } from 'react'
import './EditModal.css'
const EditModal = (props) => {
    const [isOpen, setIsOpen] = useState(true)

    const toggleModal = () => {
        setIsOpen((prev) => !prev)
    }
    if (isOpen) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <>
            {isOpen && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <form>
                            <h1 className="cross" onClick={toggleModal}>&times;</h1>
                            <input className="todo_text" type="text" value={props.clickedItem.todo} />

                            <button className="todo_update">Update</button>
                        </form>
                    </div>
                </div>
            )}

        </>

    )
}
export default EditModal