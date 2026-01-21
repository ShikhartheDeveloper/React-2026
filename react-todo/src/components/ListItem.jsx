import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const ListItem = ({ todo }) => {
  const {dispatch} = useContext(TodoContext);

  return (
    <li className="relative my-4 p-4 border border-gray-300">
      <p className="my-2 text-sm text-gray-500">#{todo.id}</p>
      <h1 className="text-2xl font-bold my-2">{todo.text}</h1>
      <div className="absolute bottom-5 right-5">
        <button onClick={() => dispatch({type: "EDIT_TODO" , payload : todo})} className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold p-1.5 mx-1">
          Edit
        </button>
        <button onClick={() => dispatch({type: "REMOVE_TODO" , payload : todo.id})} className="cursor-pointer bg-red-500 hover:bg-red-600 text-white text-sm font-semibold p-1.5 mx-1">
          Delete
        </button>
      </div>
    </li>
  );
};

export default ListItem;
