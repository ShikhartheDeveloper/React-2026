import { useSelector } from "react-redux";
import ListItem from "./ListItem";


const ListGroup = () => {

  const { todos } = useSelector(state => state.todos)
  




//   🔹 LINE 6: const { todos } = useSelector(state => state.todos)

// 🔥 YE POORE CODE KA HEART HAI 🔥
// Isko tod-tod ke samjhte hain.

// 🧩 useSelector(...)
// useSelector(selectorFunction)


// Redux store ko subscribe karta hai

// Selector function ko current state deta hai

// 🧩 state => state.todos
// state => state.todos


// state = poora Redux store

// Example store state:

// {
//   todos: {
//     todos: [...],
//     edit: { ... }
//   }
// }


// 👉 state.todos return karega:

// {
//   todos: [...],
//   edit: { ... }
// }

// 🧩 { todos } — Destructuring
// const { todos } = ...


// Equivalent to:

// const todos = state.todos.todos


// So final value:

// todos = [
//   { _id: 1, title: "Hello World", description: "Desc Here..." }
// ]

// 🧠 IMPORTANT RULE (Re-render Logic)

// Jab bhi state.todos change hota hai, ListGroup re-render hota hai.

// Agar sirf auth slice change ho → ❌ re-render nahi

// Agar todos slice change ho → ✅ re-render







  return (
    <ul className="list-group my-4">
      {
        todos.map(todo => <ListItem key={todo._id} todo={todo} />)
      }
    </ul>
  )
};

export default ListGroup;
