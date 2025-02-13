import { createSlice } from "@reduxjs/toolkit";


const TodoSlice =createSlice({
    name:"todo",
    initialState:{
        todolist:[]
    },
    reducers:{
        addtodo:(state,actions)=>{
            state.todolist.push(actions.payload)
        },
        mydelet:(state,actions)=>{
            console.log(actions.payload)
            state.todolist=state.todolist.filter(e=>e.id!==actions.payload)
        }
    }
})

export const {addtodo,mydelet} =TodoSlice.actions
export default TodoSlice.reducer