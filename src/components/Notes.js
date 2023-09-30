import Input from "./Input"
import Navbar from "./Navbar"

const Notes = () => {
    return (
        <div>
            <Navbar title={"Notes"} />
            <Input placeholder={"Add Notes"} />
        </div>
    )
}
export default Notes