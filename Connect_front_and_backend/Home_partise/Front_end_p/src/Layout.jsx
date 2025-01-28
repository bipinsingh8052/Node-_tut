 
import {Link,Outlet} from 'react-router-dom'
export default function Layout() {
  return (
    <div>
        <nav>
            <h1>logo</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">contact</Link></li>
                <li><Link to="/display">Display</Link></li>
                <li><Link to="/insert">Insert</Link></li>
                <li><Link to="/search">search</Link></li>
            </ul>
        </nav>
        <main style={{
            width:"100%", height:"1200px", border:"2px solid black"
        }}>
            <Outlet/>
        </main>
        <footer>
            <p>This is bipin singh footer for my side</p>
        </footer>
      
    </div>
  )
}
