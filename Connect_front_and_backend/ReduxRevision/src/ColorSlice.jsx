import {createSlice } from '@reduxjs/toolkit'
import reducer from '../../RudexToolKit_All/src/CounterSlice'

const ColorSlice= createSlice ({
    name:"color",
    initialState:{
        mycolor:"red"
    },
    reducers:{
        mycolorChange:((state,actions)=>{
            console.log(actions.payload)
            state.mycolor=actions.payload
        })
    } 
})


export const {mycolorChange} = ColorSlice.actions;
export default ColorSlice.reducer;



this is mornaugey acefgeybchjbhjcbhcbchbv