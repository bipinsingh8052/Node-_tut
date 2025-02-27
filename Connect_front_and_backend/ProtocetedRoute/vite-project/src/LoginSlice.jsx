import { createSlice } from '@reduxjs/toolkit'

const LoginSlice =createSlice({
    name:"onlylogin",
    initialState:{
        login:false
    },
    reducers:{
        login:(state,actions)=>{
            state.login=true
        },
        logOut:(state)=>{
            state.login=false
        }
    }
})

export default LoginSlice.reducer
export const {login,logOut} =LoginSlice.actions