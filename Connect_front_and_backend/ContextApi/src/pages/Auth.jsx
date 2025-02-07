import React, { useContext, useState } from 'react'
import { mydata } from '../USeContext';
export default function Auth() {
    let [search,set_search]=useState("");
    let {login}=useContext(mydata)
  return (
    <div>

        Enter the  name : <input type="text" value={search} placeholder='Enter the name:' onChange={(e)=>{set_search(e.target.value)}} />
        <button onClick={()=>{login(search)}}>login</button>
      
    </div>
  )
}
