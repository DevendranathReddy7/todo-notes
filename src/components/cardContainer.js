import './cardContainer.css'
const CardContainer = (props) => {

    const deleteHandle = (id) => {
        props.onDelete(id)
    }
    const editHandle = (id) => {
        props.onEdit(id)
    }
    console.log(props)
    console.log(props.clickedItem)
    return (
        <>


            {props.clickedItem.id === props.todoItem.id ?
                < div className="cardContainer" >
                    <li>
                        <button className='card-content' onClick={() => editHandle(props.todoItem.id)}>Edit</button>
                        <button className='card-content' onClick={() => deleteHandle(props.todoItem.id)}>Delete</button>
                    </li>
                </div > : ''
            }

        </>
    )
}
export default CardContainer