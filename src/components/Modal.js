
import React, { useState } from "react";
import "./Modal.css";

const Modal = (props) => {
    const [newContent, setNewContent] = useState()
    const [modal, setModal] = useState(props.isEdit);
    const [id, setId] = useState(props.todo[0].id)
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
    const updateHandler = (e) => {
        e.preventDefault()
        props.newContent({ id, newContent })

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
                            {/* <input onChange={modifyHandler}></input> */}
                            <textarea onChange={modifyHandler} className="textarea">{props.todo[0].todo}</textarea>
                            <button className="close-modal" onClick={toggleModal}>
                                Close
                            </button>
                            <button className='btnupdate' onClick={updateHandler}>
                                Update
                            </button>

                        </form>
                    </div>
                </div >
            )}
        </>
    );
}

export default Modal