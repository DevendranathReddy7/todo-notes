import Modal from "./Modal"

const EditToDo = (props) => {

    const toggleModal = (modal) => {
        props.onToggle(modal)
    }
    const newContent = (cont) => {
        props.onModify(cont)
    }
    const contentText = (todo) => {
        props.newContent(todo)
    }
    return (
        <>
            <Modal isEdit={true} onToggle={toggleModal} todo={props.editTodo} newC={newContent} newTodo={props.newTodo} newContent={contentText} />
        </>
    )
}
export default EditToDo