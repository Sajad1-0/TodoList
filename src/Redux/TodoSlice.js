import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [ 
        {id: 1, title: 'First task', completed: false},
        {id: 2, title: 'Second task', completed: true},
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
            };
            state.push(newTodo);
        },
        TodoCompleted: (state, action) => {
            const index = state.findIndex((todo) => 
            todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        DeleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        }
    }
});
// här exportera mig actions som vi skapa i reducers
export const {addTodo, TodoCompleted, DeleteTodo} = todoSlice.actions;

// exportea slicen
export default todoSlice.reducer;