import { createContext, useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {

    const initialState = {
        theme : false,
        todos : [],
        edit : {todo : {} , isEdit: false}
    }

    

    const [state , dispatch] = useReducer(todoReducer , initialState)

    return (
        <TodoContext.Provider value={{...state , dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}


export default TodoContext 