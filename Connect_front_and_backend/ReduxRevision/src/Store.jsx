import { configureStore } from '@reduxjs/toolkit'
import mycolor from './ColorSlice'
import Todoslice from './TodoSlice'
const store=configureStore({
    reducer:{
        // normal
        color:mycolor,
        todo:Todoslice
    }
})


export default store;