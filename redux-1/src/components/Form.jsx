import {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, update } from "../features/todos/todosSlice";


const Form = () => {

  const { edit } = useSelector( state => state.todos)

  const dispatch = useDispatch()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()

    !edit.isEdit ?
    dispatch(add({
      _id : crypto.randomUUID(),
      title,
      description
    }))
    :
    dispatch(update({
      
      _id : edit.todo._id,
      title,
      description
    
    }))

    setTitle("")
    setDescription("")


  }


  useEffect(() => {

    setTitle(edit.todo.title)
    setDescription(edit.todo.description)
  }, [edit])


  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Enter Any Text Here"
        className="form-control rounded-md"
      />
      <textarea value={description} onChange={(e)=> setDescription(e.target.value)} className="form-control rounded-md my-2"></textarea>
      <button className="btn btn-success my-2 w-100 rounded-0">
        {edit.isEdit ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
};

export default Form;
