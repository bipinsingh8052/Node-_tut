import { configureStore } from '@reduxjs/toolkit'
import mycolor from './ColorSlice'
const store=configureStore({
    reducer:{
        // normal
        color:mycolor
    }
})


export default store;