import React, { useContext } from 'react'
 import { myContext } from '../App'
export default function Cont5() {

    let {User}=useContext(myContext)
  return (
    <div>
      <h1>THis is last page: {User}</h1>
      
    </div>
  )
}
