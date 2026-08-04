import { createSlice, nanoid } from "@reduxjs/toolkit";

// jest like state
const initialState = {
    todo_data: []
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todo_data = [{ id: nanoid(), todo_text: action.payload }, ...state.todo_data]
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            state.todo_data = state.todo_data.filter((d) => d.id !== id);
        }
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;