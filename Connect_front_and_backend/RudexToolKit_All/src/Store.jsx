import { configureStore } from '@reduxjs/toolkit'
import bgcolo from './CounterSlice'

// import CounterSlice from './CounterSlice';
// const store =configureStore({

//     reducer:{
//         mycount:CounterSlice,
//         multi:CounterSlice
//     }
// })

// export default store;




const Store =configureStore({
    reducer:{
        bagcolor:bgcolo
        // this is my named key:value
    }
})

export default Store;
