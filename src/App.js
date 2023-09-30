import { NavLink } from "react-router-dom"
import { StyledButton } from "./components/styles/ButtonStyles"

const App = () => {
  return (
    <div>
      <NavLink to="/notes"><StyledButton>Notes</StyledButton></NavLink>
      <NavLink to="/todo"><StyledButton>ToDo</StyledButton></NavLink>
    </div>
  )
}
export default App