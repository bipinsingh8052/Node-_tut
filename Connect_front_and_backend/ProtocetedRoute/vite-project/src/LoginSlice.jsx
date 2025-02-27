import { createSlice } from '@reduxjs/toolkit'

const LoginSlice =createSlice({
    name:"onlylogin",
    initialState:{
        login:false
    },
    reducers:{
        login:(state)=>{
            state.login=true;
        },
        logOut:(state)=>{
            state.login=false
        }
    }
})

export default LoginSlice.actions
export const {login,logOut} =LoginSlice.reducer