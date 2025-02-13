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
        },
        InCompleted:(state,actions)=>{
            for(let i=0;i<state.todolist.length;i++){
                if(state.todolist[i].id=== actions.payload.id){
                    state.todolist[i].status=false
                }
            }
        },
        Completed:(state,actions)=>{
            for(let i=0;i<state.todolist.length;i++){
                if(state.todolist[i].id=== actions.payload.id){
                    state.todolist[i].status=true
                }
            }
        },
        editdata:(state,actions)=>{
            console.log(actions.payload)
            for(let i=0;i<state.todolist.length;i++){
                if(state.todolist[i].id=== actions.payload.id){
                    state.todolist[i].work=actions.payload.input;
                }
            }
        }

    }
})

export const {addtodo,mydelet,InCompleted,Completed,editdata} =TodoSlice.actions
export default TodoSlice.reducer