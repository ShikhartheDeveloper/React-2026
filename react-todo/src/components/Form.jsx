import { useContext, useEffect, useState } from "react"
import TodoContext from "../context/TodoContext"

const Form = () => {

    const {edit , dispatch } = useContext(TodoContext)

    const [input, setInput] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        !edit.isEdit ?
        dispatch({type: "ADD_TODO" , payload : {id: crypto.randomUUID() , text: input}}) :
         dispatch({type: "UPDATE_TODO" , payload : {id: edit.todo.id , text: input}})

        setInput("")
    }





    useEffect(() => {
        setInput(edit.todo.text)
    }, [edit])



    return (

        <form onSubmit={handleSubmit} className="border border-gray-300 p-4">
            <input required value={input} onChange={(e) => setInput(e.target.value)} className="border border-gray-400 w-full p-4 my-4" type="text" placeholder="Enter Anything..." />
            <button className="bg-green-500 w-full p-2 text-lg font-bold text-white hover:bg-green-600 cursor-pointer my-4">Save</button>
        </form>
    )
}


export default Form