import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {id: 1, title: 'Task 1', completed: false},
        {id: 2, title: 'Task 2', completed: true},
        {id: 3, title: 'Task 3', completed: false},
        {id: 4, title: 'Task 4', completed: true},
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
            };
            state.push(newTodo);
        }
    }
});
// här exportera mig actions som vi skapa i reducers
export const {addTodo} = todoSlice.actions;

// exportea slicen
export default todoSlice.reducer;