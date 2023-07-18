import Modal from "./Modal"

const EditToDo = (props) => {

    const toggleModal = (modal) => {
        props.onToggle(modal)
    }
    const newContent = (cont) => {
        props.onModify(cont)
    }
    return (
        <>
            <Modal isEdit={true} onToggle={toggleModal} todo={props.editTodo} newC={newContent} />
        </>
    )
}
export default EditToDo