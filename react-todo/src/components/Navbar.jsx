import { useContext } from "react"
import TodoContext from "../context/TodoContext"

const Navbar = ({ title = "Default Title" }) => {

    const { todos } = useContext(TodoContext)

    return (
        <nav className="bg-blue-500 py-2.5 px-8 flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">{title}</h1>
            <h1 className="text-xl font-bold text-white">{todos.length}</h1>
        </nav>
    )
}

export default Navbar