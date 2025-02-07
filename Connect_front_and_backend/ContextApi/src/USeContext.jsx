import React, { useState } from 'react'
import { createContext } from 'react'



let mydata=createContext();
export default function USeContext({children}) {
    let [user,setuser]=useState({
        name:"",
        aut:false
    })
    let logout=()=>{
        setuser({
            name:"",
            aut:false
        })

    }

    let login=(nm)=>{
        setuser({
            name:nm,
            aut:true
        })

    }
  return (
    <div>
      <mydata.Provider>
        {children}
      </mydata.Provider>

    </div>
  )
}
