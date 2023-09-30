import { StyledInput } from "./styles/ButtonStyles"
import { StyledButton } from "./styles/ButtonStyles"

const Input = (props) => {
    const { placeholder } = props
    return (
        <div>
            <StyledInput type="text" placeholder={placeholder}></StyledInput>
            <StyledButton>Add</StyledButton>
        </div>
    )
}
export default Input