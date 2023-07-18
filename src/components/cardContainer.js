import './cardContainer.css'
const CardContainer = (props) => {

    const deleteHandle = (id) => {
        props.onDelete(id)
    }
    return (
        <>
            {< div className="cardContainer" >
                <li>
                    <button className='card-content' >Edit</button>
                    <button className='card-content' onClick={() => deleteHandle(props.todoItem.id)}>Delete</button>
                </li>
            </div >}
        </>
    )
}
export default CardContainer