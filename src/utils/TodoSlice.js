import { createSlice } from "@reduxjs/toolkit";
import { TodoStorage } from "./TodoStorage";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        value: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.value.push({id: state.value.length, content: action.payload, done: false});
            TodoStorage.saveTodos(state.value);
        },
        deleteTodo: (state, action) => {
            state.value = state.value.filter(e => e.id != action.payload);
            TodoStorage.saveTodos(state.value);
        },
        markTodoDone: (state, action) => {
            state.value = state.value.map(e => {
                if(e.id == action.payload) {
                    return {...e, done: true};
                }
                return e;
            })
            TodoStorage.saveTodos(state.value);
        },
        loadTodos: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {addTodo, deleteTodo, markTodoDone, loadTodos} = todoSlice.actions;
export default  todoSlice.reducer;