import React, { useContext } from 'react'
import { mydata } from '../USeContext'
export default function Unauth() {
    let {logout,user}=useContext(mydata)
  return (
    <div>

        <h1>This is login page</h1>
        <p>username :  {user.name}</p>
        <button onClick={()=>{logout()}}>LogOut</button>
      
    </div>
  )
}
