import { useState } from 'react'
import './PlaceHolder.css'
import kebab from '../assests/kebab.png'
import CardContainer from './cardContainer'
const PlaceHolder = (props) => {
    const [isChecked, setIsChecked] = useState()
    const [iconClicked, setIconClicked] = useState(false)
    const [readMore, setReadMore] = useState(true)
    //const [items, setItem] = useState(props)
    const checkBoxHandler = (e) => {
        setIsChecked(e.target.checked)
    }

    const iconClickHandler = () => {
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
    // const selectHandler = (id) => {
    //     const newcard = items.filter((update) => {
    //         return update.id !== id
    //     })
    //     setItem(newcard)
    // }

    return (
        <>
            {props.notesList && <ul className='list'>
                <div className='noteDiv'>
                    {props.notesList.map((note) => <li key={Math.random()}>
                        <h4 className='notes'>{readMore ? note.slice(0, 138) : note}
                            <span onClick={toggleReadMore} className="read-or-hide">
                                {readMore ? "...read more" : " show less"}
                            </span></h4>
                    </li>)}
                </div>
            </ul>}

            {props.todoList && <ul className='list'>
                {props.todoList.map((todo) => <li key={Math.random()}>
                    <div className='todoCard'>
                        <input type="checkbox" className='checkbox' />
                        <h4 className='todos' >{todo.todo}</h4>
                        <button >{isChecked ? "Done" : "ToDo"}</button>
                        <img src={kebab} alt="icon" onClick={iconClickHandler} ></img>
                        {iconClicked ? <CardContainer todoItem={todo} onDelete={deleteItemHandle} onEdit={editHandle} /> : ''}

                    </div>
                </li>)}
            </ul>}

        </>

    )
}
export default PlaceHolder