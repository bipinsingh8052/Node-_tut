import React from 'react'
import Navbartoo from './component/Navbartoo'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <Navbartoo/>

        <hr />
        <Outlet/>


        <hr />
        <div>
            Footer the there 
        </div>
      
    </div>
  )
}
