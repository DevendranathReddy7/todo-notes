import { NavLink } from "react-router-dom"
import { StyledButton, StyledNav } from "./styles/ButtonStyles"

const Navbar = (props) => {
    return (
        <StyledNav >
            <h2 className="title">Welcome to {props.title}</h2>
            <div>
                {props.title === "ToDo" ? <NavLink to='/notes'><StyledButton navbar>Notes</StyledButton></NavLink> :
                    <NavLink to='/todo'><StyledButton navbar>ToDo</StyledButton></NavLink>
                }
                <NavLink to='/'><StyledButton navbar>&larr; Back</StyledButton></NavLink>
            </div>
        </StyledNav>
    )
}
export default Navbar