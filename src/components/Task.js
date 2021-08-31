import { createSlice } from '@reduxjs/toolkit'
const initialState = {
 toDoList:[]
}

const toDoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
     savetodo:(state,action)=>{
        state.toDoList.push(action.payload)
     },
    }
});

export const {savetodo} = toDoSlice.actions;
export const selectTodos= state =>state.todos.toDoList;
export default toDoSlice.reducer;