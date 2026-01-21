import { useEffect, useState } from "react"
import TodoContext from "../context/TodoContext"

const Form = () => {

    const [input, setInput] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        

        setInput("")
    }





    useEffect(() => {
    }, [])



    return (

        <form onSubmit={handleSubmit} className="border border-gray-300 p-4">
            <input required value={input} onChange={(e) => setInput(e.target.value)} className="border border-gray-400 w-full p-4 my-4" type="text" placeholder="Enter Anything..." />
            <button className="bg-green-500 w-full p-2 text-lg font-bold text-white hover:bg-green-600 cursor-pointer my-4">Save</button>
        </form>
    )
}


export default Form