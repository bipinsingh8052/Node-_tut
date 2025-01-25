import { Link, Outlet } from "react-router-dom"


function Layout() {
  return (
    <div>
         <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/insert">Insert</Link></li>
            </ul>
         </nav>

         <main style={{backgroundColor:"yellow",color:"black" ,height:"1200px",width:"100%"}}>
            <Outlet/>
         </main>

         <footer style={{backgroundColor:"red",width:"100%"}}>
            this is my all footer section
         </footer>
        
      
    </div>
  )
}

export default Layout
