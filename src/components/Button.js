
import { useState } from 'react'
import './Button.css'
const Button = (props) => {
    const [showPlaceHolder, setShowPlaceHolder] = useState(true)
    const [showContent_notes, setShowContent_notes] = useState(false)

    const showContentHandler = () => {
        setShowContent_notes(prev => { return !prev })
        props.onSelect(showContent_notes)
    }
    console.log(11111111111, showContent_notes)
    console.log(2222222222222222, props.contentShow)
    const showPlaceHolderHandler = () => {
        setShowPlaceHolder((prevState) => { return (!prevState) })
        props.onClick(showPlaceHolder)
    }


    return (
        <>
            <button className="button" onClick={showPlaceHolderHandler}>+</button>
            <h4>{props.title}</h4>
            {props.title === "Notes" && <i className={`arrow ${showContent_notes ? 'up' : 'down'}`} onClick={showContentHandler}></i>}


        </>
    )
}
export default Button