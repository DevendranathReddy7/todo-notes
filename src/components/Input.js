import { StyledInput } from "./styles/ButtonStyles"
import { StyledButton } from "./styles/ButtonStyles"

const Input = (props) => {
    const { placeholder, onChange, onSubmit } = props
    return (
        <form onSubmit={onSubmit}>
            <div>
                <StyledInput type="text" placeholder={placeholder} onChange={onChange}></StyledInput>
                <StyledButton>Add</StyledButton>
            </div>
        </form>
    )
}
export default Input