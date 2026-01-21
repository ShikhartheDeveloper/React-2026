import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos : [{ _id: 1, title: 'Learn Redux Toolkit' , description: 'Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development.'}],
    edit : { todo :{} , isEdit : false}
}

const todosSlice = createSlice({
    name : 'todos',
    initialState , 
    reducers : {
        add : (state , action) => { 
            return {
                ...state,
                todos : [action.payload , ...state.todos]
            }
        },
        remove : (state , action) => {
            return {
                ...state,
                todos : state.todos.filter( todo => todo._id !== action.payload)
            }
        },
        edit : (state , action) => {
            return {
                ...state,
                edit : { todo : action.payload , isEdit : true}
            }
        },
        update : (state , action) => {
            return {
                ...state,
                todos : state.todos.map( todo => todo._id === action.payload._id ? action.payload : todo),
                edit : { todo : {} , isEdit : false}
            }
        }
    }

    // {
    //     add : (state , action) => {},
    //     remove : (state , action) => {},
    //     edit : (state , action) => {},   ye saare reducers hain jo humne actions ke liye banaye hain
    //     update : (state , action) => {}
    // }
})

export const { add , remove , edit , update } = todosSlice.actions      // ye humne actions ko export kiya hai taake hum inhe components mein use kar sakein

export default todosSlice.reducer