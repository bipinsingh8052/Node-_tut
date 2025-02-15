import React from 'react'
import NavbarToo from './pages/NavbarToo'
import Footer from './pages/Footer'
import{ Outlet} from 'react-router-dom'
export default function Layout() {
  return (
    <div>
      <NavbarToo/>likker
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
