import { useDispatch } from "react-redux";
import { edit, remove } from "../features/todos/todosSlice";

const ListItem = ({ todo }) => {


  const dispatch = useDispatch();


  return (
    <li className="list-group-item">
      <p>Id : {todo._id}</p>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <span className="float-end">
        <button onClick={()=> dispatch(edit(todo))}className="btn btn-sm btn-warning mx-1 rounded-0">Edit</button>
        <button onClick={()=> dispatch(remove(todo._id))} className="btn btn-sm btn-danger rounded-0">Delete</button>
      </span>
    </li>
  );
};

export default ListItem;
