
import React, { useState } from "react";
import "./Modal.css";

const Modal = (props) => {
    const [newContent, setNewContent] = useState()
    const [modal, setModal] = useState(props.isEdit);
    const [id, setId] = useState(props.todo.id)
    const toggleModal = () => {
        setModal((prev) => { return !prev });
        props.onToggle(!modal)

    };
    const modifyHandler = (e) => {
        setNewContent(e.target.value)


    }
    const submitHandler = (e) => {
        e.preventDefault()
        props.newC({ id, newContent })
    }

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <form onSubmit={submitHandler}>
                            <textarea onChange={modifyHandler}>{props.todo[0].todo}</textarea>
                            <button className="close-modal" onClick={toggleModal}>
                                Close
                            </button>
                            <button>Update</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal