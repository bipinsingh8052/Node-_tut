import { useMemo } from "react";
import { useState } from "react"
import Parent from "./Parent";


function App() {
 let[add,setAdd]=useState(0);
 let [sub,Setsub]=useState(100);
 let[no,setno]=useState(0);
 let[city,setcity]=useState("");
 const multip=useMemo(()=>{
  console.log("memo value");
  return add*2;
 },[add])









 const memorize =useMemo(()=>{
  for(let i=0;i<=1000000000;i++){}
  return no*2
 },[no])
  return (
    <>
     <h1>This is MemoValue :{multip}</h1>
     <h1>This is Counter:{add}</h1>
     <button onClick={()=>{setAdd(add+1)}}>Add</button>
     <h1>THis is Substracr:{sub}</h1>
     <button onClick={()=>{Setsub(sub-1)}}>Sub</button>





     <br />

     <br /><br /><br /><br /><br /><br /><br /><br /><br />
     <hr />
     Enter the number: <input type="number" value={no} onChange={(e)=>{setno(e.target.value)}}/>
     Enter the city: <input type="text" value={city} onChange={(e)=>{setcity(e.target.value)}}/>


     <h1>memorize value:{memorize}</h1>








     <br /><br /><br /><br /><br /><br /><br /><br />
     <Parent/>
    </>
  )
}

export default App
