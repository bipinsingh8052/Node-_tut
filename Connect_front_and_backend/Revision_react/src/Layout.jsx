import { Link, Outlet } from "react-router-dom"



export default function Layout() {
  return (
    <div>
        <Link to="/home"> Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">contact</Link>

        <hr />

<Outlet/>
        <hr />
        <footer>This is footer</footer>
    </div>
  )
}
