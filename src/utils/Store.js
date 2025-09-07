import { configureStore } from "@reduxjs/toolkit";

import todoReducer from './TodoSlice.js'

export default configureStore({
    reducer: {
        todos: todoReducer
    },
})