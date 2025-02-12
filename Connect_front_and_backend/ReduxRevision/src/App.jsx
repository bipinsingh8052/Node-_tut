import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { mycolorChange } from "./ColorSlice";
function App() {
  let [input,setinput]=useState("")
  const displ =useDispatch();
  let redi=useSelector((state)=>state.color.mycolor)
 

  return (
    <>

    <h1>This is my color changer app</h1>
    <input type="text"  onChange={(e)=>{setinput(e.target.value)}} />
    <button onClick={()=>{displ(mycolorChange(input))}}>change it color</button>
    <div style={{height:"200px", width:"200px", border:"2px solid black", backgroundColor:redi}}></div>
      
    </>
  )
}

export default App
