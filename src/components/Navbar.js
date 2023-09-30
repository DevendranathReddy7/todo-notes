import { NavLink } from "react-router-dom"
import { StyledButton, StyledNav } from "./styles/ButtonStyles"

const Navbar = (props) => {
    return (
        <StyledNav >
            <h3 className="title">Welcome to {props.title}</h3>
            <div>
                {props.title === "ToDo" ? <NavLink to='/notes'><StyledButton navbar>Notes</StyledButton></NavLink> :
                    <NavLink to='/todo'><StyledButton navbar>ToDo</StyledButton></NavLink>
                }
                <NavLink to='/'><StyledButton navbar>Back</StyledButton></NavLink>
            </div>
        </StyledNav>
    )
}
export default Navbar