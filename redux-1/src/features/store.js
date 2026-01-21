import { configureStore } from "@reduxjs/toolkit";
import todos from "./todos/todosSlice"

const store = configureStore({
    reducer: { todos }
})


export default store