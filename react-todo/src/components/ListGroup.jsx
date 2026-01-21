import { useContext } from "react"
import ListItem from "./ListItem"
import TodoContext from "../context/TodoContext"

const ListGroup = () => {

    const { todos , dispatch} = useContext(TodoContext)


    if (todos.length === 0) {
        return (
            <h1 className="text-center my-4">No Todos Yet.</h1>
        )
    }

    return (
        <>
            <button onClick={() => dispatch({type: "CLEAR_ALL"})} className="my-4 bg-red-500 hover:bg-red-600 text-white cursor-pointer p-1.5">Clear All</button>
            <ul className="my-6">
                {
                    todos.map(todo => <ListItem key={todo.id} todo={todo} />)
                }
            </ul>
        </>
    )
}

export default ListGroup