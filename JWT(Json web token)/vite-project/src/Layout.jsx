import React from 'react'
import Tonavbar from './component/Tonavbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div><Tonavbar/>
    <main>
        <Outlet/>
    </main>
    <hr />
    <div style={{color:"white", backgroundColor:"black", textAlign:"center"}}>www.company.com </div>
      
    </div>
  )
}
