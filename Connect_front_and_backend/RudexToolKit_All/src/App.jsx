// import { useDispatch, useSelector } from "react-redux"
// import { increment,decrement, multi } from "./CounterSlice"

import { useDispatch, useSelector } from "react-redux"
import { bgcolorgreen, bgcoloryellow } from "./CounterSlice";




function App() {
  // let cout=useSelector((state)=>state.mycount.count)
  // let multi =useSelector((state)=>state.multi.multii)
  // let displace=useDispatch();

  let displace=useDispatch();
  let color=useSelector((state)=>state.bagcolor.bgcolor)
  return (
    <>
    {/* <h1>count:{cout}</h1>
    <button onClick={()=>{ displace(increment())}}>Incremt</button>
    <button onClick={()=>{ displace(decrement())}}>decrement</button>
    <h1>Multi:{multi}</h1>
    <button onClick={()=>{displace(multi())}}>Multi</button> */}



    <button onClick={()=>{displace(bgcolorgreen())}}>Change the bgColor </button>
    <button onClick={()=>{displace(bgcoloryellow())}}>Yellow</button>
    <h1>THis is my Color:{color}</h1>
    <div style={{height:"200px", width:"200px", border:"2px solid black", backgroundColor:color}}></div>
      
    </>
  )
}

export default App
