import { NavLink } from "react-router-dom"
import { StyledButton } from "./components/styles/ButtonStyles"
const App = () => {
  return (
    <div className="app">
      <NavLink to="/notes"><StyledButton>Notes</StyledButton></NavLink>
      <NavLink to="/todo"><StyledButton>ToDo</StyledButton></NavLink>
    </div>
  )
}
export default App