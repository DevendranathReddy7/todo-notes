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
                        <button className="error_cancel btn">X</button>
                        <h4>{props.err}</h4>
                    </div>
                    <div><button className="btn close_btn" onClick={closeHandler}>X</button ></div>
                </div>
            </StyledContainer>
        </div>
    )
}
export default Error