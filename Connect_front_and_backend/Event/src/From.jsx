import  { useState } from 'react'

export default function From() {
    let [name,setname]=useState("");
    let [city,setcity]=useState("");
    function Submit(){
        let nlame={name:name,city:city}
        console.log(nlame)
    }
  return (
    <div>
      <h1>Enter the application</h1>
      Enter the name: <input type="text" name='name' value={name} onChange={(e)=>{setname(e.target.value)}} />
      <br /><br /><br />
      Enter the name: <input type="text" name='city' value={city} onChange={(e)=>{setcity(e.target.value)}} />
      <br /><br /><br />
      <button onClick={Submit}>Submit</button>
    </div>
  )
}
