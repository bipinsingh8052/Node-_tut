import React, { useContext } from 'react'
 import { myContext } from '../App'
export default function Cont5() {

    let {User,SetUser}=useContext(myContext)
  return (
    <div>
      <h1>THis is last page: {User}</h1>
    <button onClick={()=>{SetUser("Basant")}}>Change it </button>
      
    </div>
  )
}
