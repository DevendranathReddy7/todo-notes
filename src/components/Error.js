import { StyledContainer } from "./styles/ButtonStyles"
import './Error.css'
const Error = (props) => {
    const closeHandler = () => {
        props.onClose()
    }
    return (
        <div>
            <StyledContainer err>
                <div className="wrapper">
                    <div className="error_wrapper1">
                        <span className="tootip span">&#x1F6C8;</span>
                        <p className="hide">Please add a valid Item or action on the error to remove the Error.</p>
                        <h4 className="err">{props.err}</h4>
                    </div>
                    <div><button className="btn close_btn" onClick={closeHandler}>X</button ></div>
                </div>
            </StyledContainer>
        </div>
    )
}
export default Error