import { configureStore } from '@reduxjs/toolkit';
import Login from './LoginSlice'
const Store =configureStore({
    reducer:{
        login:Login
    }
})

export default Store;