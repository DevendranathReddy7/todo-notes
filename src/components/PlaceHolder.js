import { useState } from 'react'
import './PlaceHolder.css'
import kebab from '../assests/kebab.png'
import CardContainer from './cardContainer'
const PlaceHolder = (props) => {
    const [isChecked, setIsChecked] = useState(false)
    const [iconClicked, setIconClicked] = useState(false)
    const [readMore, setReadMore] = useState(true)
    const [iconClickedItem, setIconClickedItem] = useState([])

    const checkBoxHandler = (e) => {
        setIsChecked(e.target.checked)

    }
    const iconClickHandler = (id) => {
        const iconClickedFor = props.todoList.find(eachTodo => {
            return eachTodo.id === id
        })
        setIconClickedItem(iconClickedFor)
        setIconClicked((prev) => { return !prev })
    }
    const deleteItemHandle = (id) => {
        props.onDelete(id)
    }
    const editHandle = (id) => {
        props.onEdit(id)
    }
    const toggleReadMore = () => {
        setReadMore(!readMore);
    }


    return (
        <>
            {props.notesList && <ul className='list'>
                <div className='noteDiv'>
                    {props.notesList.map((note) => <li key={Math.random()}>
                        <h4 className='notes'>{readMore ? note.slice(0, 138) : note}
                            <span onClick={toggleReadMore} className="read-or-hide">
                                {note.length > 138 ? readMore ? "...read more" : " show less" : ''}
                            </span></h4>
                    </li>)}
                </div>
            </ul>}

            {props.todoList && <ul className='list'>
                {props.todoList.map((todo) => <li key={Math.random()}>
                    <div className='todoCard'>
                        <input type="checkbox" className='checkbox' onChange={checkBoxHandler} />
                        <h4 className='todos' >{todo.todo}</h4>
                        <button >{isChecked ? "Done" : "ToDo"}</button>
                        <img src={kebab} alt="icon" onClick={() => iconClickHandler(todo.id)} ></img>
                        {iconClicked ? <CardContainer todoItem={todo} onDelete={deleteItemHandle} onEdit={editHandle} clickedItem={iconClickedItem} /> : ''}
                    </div>
                </li>)}
            </ul>}

        </>

    )
}
export default PlaceHolder