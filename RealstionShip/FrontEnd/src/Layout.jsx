import { Outlet } from 'react-router-dom'
import Tooanavab from './pages/Tooanavab'
import Footer from './pages/Footer'
function Layout() {
  return (
    <div>
        <Tooanavab/>
        <hr />

        <main>
            <Outlet/>
        </main>
        <hr />
        <Footer/>
      
    </div>
  )
}

export default Layout
