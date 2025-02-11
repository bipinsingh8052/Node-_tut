// import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";
 

// const CounterSlice =createSlice({
//     name:"count",
//     initialState:{
//         count:0,
//         multii:2
//     },
//     reducers:{
//         increment:(state)=>{
//             state.count=state.count+1;
//         },
//         decrement:(state)=>{

//             state.count=state.count-1;
//         },
//         multi:(state)=>{
//             state.multi=state.multi*2;
//         }
//     }
// })

// export const {increment,decrement,multi}=CounterSlice.actions
// export default CounterSlice.reducer




const CounterSlice=createSlice({
    name:"bgcolor",
    initialState:{
        bgcolor:"pink"
    },
    reducers:{
        bgcoloryellow:(state)=>{
            state.bgcolor="yellow"
        },
        bgcolorgreen:(state)=>{
            state.bgcolor="green"
        }
    }
})

export const {bgcolorgreen,bgcoloryellow}=CounterSlice.actions;
export default CounterSlice.reducer;